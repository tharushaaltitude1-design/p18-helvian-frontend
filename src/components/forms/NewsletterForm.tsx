import { useEffect, useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { footer } from '@/data';
import { newsletterSchema, type NewsletterValues } from '@/utils/validators';

export function NewsletterForm({ onToast }: { onToast: (message: string) => void }) {
  const errorId = useId();
  const [formspreeState, submitToFormspree, resetFormspree] = useFormspree('mrpqpowk');
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: '', website: '' },
  });

  const onSubmit = async (values: NewsletterValues) => {
    // Honeypot check for bots
    if (values.website) {
      reset({ email: '', website: '' });
      setSuccess(true);
      onToast(footer.newsletter.toast);
      return;
    }

    await submitToFormspree({
      email: values.email,
      _subject: `New Newsletter Subscriber: ${values.email} (Helvian)`,
      formType: 'Footer Newsletter Subscription',
      notification: `New subscriber got for updates: ${values.email}`,
      submittedAt: new Date().toLocaleString(),
    });
  };

  useEffect(() => {
    if (!formspreeState.succeeded) return;
    setSuccess(true);
    reset({ email: '', website: '' });
    resetFormspree();
    onToast(footer.newsletter.toast);
  }, [formspreeState.succeeded, reset, resetFormspree, onToast]);

  const submitting = isSubmitting || formspreeState.submitting;

  return (
    <div className="newsletter-wrap">
      <h3>{footer.titles.updates}</h3>
      <form className="newsletter" onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type="email"
          autoComplete="email"
          placeholder={footer.newsletter.placeholder}
          aria-label={footer.newsletter.label}
          disabled={submitting}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? errorId : undefined}
          {...register('email')}
        />
        <input className="honeypot" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register('website')} />
        <button type="submit" disabled={submitting} aria-label={footer.newsletter.subscribe}>
          {submitting ? (
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
          ) : success ? (
            <CheckCircle2 size={18} aria-hidden="true" />
          ) : (
            <ArrowRight size={18} aria-hidden="true" />
          )}
        </button>
      </form>
      {errors.email && (
        <small id={errorId} className="field-error" role="alert">
          {errors.email.message}
        </small>
      )}
      {success && (
        <small className="field-success" role="status">
          ✓ {footer.newsletter.toast}
        </small>
      )}
    </div>
  );
}
