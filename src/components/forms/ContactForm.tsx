import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { RotateCcw, Send } from 'lucide-react';
import { contact } from '@/data';
import { contactSchema, type ContactValues } from '@/utils/validators';
import { loadTurnstile, resetTurnstile, turnstileSiteKey } from '@/services/turnstile';
import { Button, FormField, IconButton, Select } from '@/components/ui';

type ContactSubmission = ContactValues & { 'cf-turnstile-response': string };

const emptyValues: ContactValues = { fullName: '', email: '', phone: '', organization: '', interest: '', size: '', message: '', website: '' };

export function ContactForm({ onToast }: { onToast: (message: string) => void }) {
  const [sent, setSent] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileError, setTurnstileError] = useState('');
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidget = useRef<string | null>(null);
  const [formspreeState, submitToFormspree, resetFormspree] = useFormspree<ContactSubmission>('mrpqpowk');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema), defaultValues: emptyValues });

  useEffect(() => {
    let cancelled = false;
    const container = turnstileRef.current;
    if (!container) return;

    loadTurnstile()
      .then((api) => {
        if (cancelled) return;
        turnstileWidget.current = api.render(container, {
          sitekey: turnstileSiteKey,
          theme: 'auto',
          callback: (token) => {
            setTurnstileToken(token);
            setTurnstileError('');
          },
          'expired-callback': () => {
            setTurnstileToken('');
            resetTurnstile(turnstileWidget.current ?? undefined);
          },
          'error-callback': () => {
            setTurnstileToken('');
            setTurnstileError(contact.turnstileError);
          },
        });
      })
      .catch(() => {
        if (!cancelled) setTurnstileError(contact.turnstileError);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const onSubmit = async (values: ContactValues) => {
    if (values.website) {
      setSent(true);
      reset(emptyValues);
      onToast(contact.toast);
      return;
    }
    if (!turnstileToken) {
      setTurnstileError(contact.turnstileRequired);
      return;
    }
    await submitToFormspree({ ...values, 'cf-turnstile-response': turnstileToken });
    resetTurnstile(turnstileWidget.current ?? undefined);
    setTurnstileToken('');
  };

  useEffect(() => {
    if (!formspreeState.succeeded) return;
    setSent(true);
    reset(emptyValues);
    resetFormspree();
    onToast(contact.toast);
  }, [formspreeState.succeeded, reset, resetFormspree, onToast]);

  const errorFor = (field: keyof ContactValues) =>
    errors[field]?.message ?? formspreeState.errors?.getFieldErrors(field).map((error) => error.message).join(' ');
  const formError =
    formspreeState.errors &&
    (formspreeState.errors.getFormErrors().map((error) => error.message).join(' ') ||
      formspreeState.errors.getFieldErrors('cf-turnstile-response').map((error) => error.message).join(' ') ||
      contact.submitError);
  const submitting = isSubmitting || formspreeState.submitting;
  const [fullName, email, phone, organization] = contact.fields;

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      onChange={() => {
        if (sent) setSent(false);
        if (formspreeState.errors) resetFormspree();
      }}
    >
      <div className="form-grid">
        {[fullName, email, phone].map((field) => (
          <FormField key={field.name} label={field.label} error={errorFor(field.name)}>
            <input type={field.type} autoComplete={field.autoComplete} {...register(field.name)} />
          </FormField>
        ))}
        <FormField label={contact.interestLabel} error={errorFor('interest')}>
          <Select placeholder={contact.interestPlaceholder} options={contact.interestOptions} {...register('interest')} />
        </FormField>
        <FormField label={organization.label} error={errorFor('organization')}>
          <input type={organization.type} autoComplete={organization.autoComplete} {...register('organization')} />
        </FormField>
        <FormField label={contact.sizeLabel} error={errorFor('size')}>
          <Select placeholder={contact.sizePlaceholder} options={contact.sizeOptions} {...register('size')} />
        </FormField>
        <FormField label={contact.messageLabel} error={errorFor('message')} full>
          <textarea rows={5} {...register('message')} />
        </FormField>
      </div>
      <input className="honeypot" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register('website')} />
      <FormField label={contact.turnstileLabel} error={turnstileError} full>
        <div ref={turnstileRef} className="turnstile" />
      </FormField>
      {formError && (
        <small className="field-error" role="alert">
          {formError}
        </small>
      )}
      <div className="form-actions">
        <Button type="submit" disabled={submitting}>
          {submitting ? contact.sending : sent ? contact.sent : contact.send} <Send size={15} aria-hidden="true" />
        </Button>
        <IconButton
          size="md"
          label={contact.reset}
          onClick={() => {
            reset(emptyValues);
            resetFormspree();
            setSent(false);
            setTurnstileToken('');
            setTurnstileError('');
            resetTurnstile(turnstileWidget.current ?? undefined);
          }}
        >
          <RotateCcw size={18} aria-hidden="true" />
        </IconButton>
      </div>
    </form>
  );
}
