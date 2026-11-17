import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight } from 'lucide-react';
import { contact, demoRequest as copy, plans } from '@/data';
import { demoSchema, type DemoValues } from '@/utils/validators';
import { submitDemoRequest } from '@/services/api';
import { Button, FormField, Highlight, Modal, SectionLabel, Select } from '@/components/ui';
import { DemoSuccess } from './DemoSuccess';

type Props = { plan: string; onClose: () => void; onToast: (message: string) => void };

const planOptions = plans.map((item) => item.title);

export function DemoRequestModal({ plan, onClose, onToast }: Props) {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DemoValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: { fullName: '', email: '', organization: '', role: '', facility: '', plan, message: '', website: '' },
  });

  const submit = async (values: DemoValues) => {
    await submitDemoRequest(values);
    setDone(true);
    onToast(copy.toast);
  };

  return (
    <Modal
      open
      onClose={onClose}
      label={<SectionLabel>{copy.label}</SectionLabel>}
      title={<>{copy.title.before}<Highlight>{copy.title.highlight}</Highlight></>}
    >
      {done ? (
        <DemoSuccess onClose={onClose} />
      ) : (
        <form onSubmit={handleSubmit(submit)} className="modal-form" noValidate>
          <FormField label={copy.fields.fullName} error={errors.fullName?.message}>
            <input autoComplete="name" data-autofocus {...register('fullName')} />
          </FormField>
          <FormField label={copy.fields.email} error={errors.email?.message}>
            <input type="email" autoComplete="email" {...register('email')} />
          </FormField>
          <FormField label={copy.fields.organization} error={errors.organization?.message}>
            <input autoComplete="organization" {...register('organization')} />
          </FormField>
          <FormField label={copy.fields.role} error={errors.role?.message}>
            <Select placeholder={copy.placeholders.role} options={copy.roles} {...register('role')} />
          </FormField>
          <FormField label={copy.fields.facility} error={errors.facility?.message}>
            <Select placeholder={copy.placeholders.facility} options={contact.interestOptions} {...register('facility')} />
          </FormField>
          <FormField label={copy.fields.plan}>
            <Select placeholder={copy.placeholders.plan} options={planOptions} {...register('plan')} />
          </FormField>
          <FormField label={copy.fields.message} full>
            <textarea rows={3} {...register('message')} />
          </FormField>
          <input className="honeypot" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register('website')} />
          <Button type="submit" className="modal-submit" disabled={isSubmitting}>
            {isSubmitting ? copy.sending : copy.submit} <ArrowUpRight size={16} aria-hidden="true" />
          </Button>
        </form>
      )}
    </Modal>
  );
}
