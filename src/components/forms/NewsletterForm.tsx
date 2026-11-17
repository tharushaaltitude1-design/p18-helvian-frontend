import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { footer } from '@/data';
import { newsletterSchema, type NewsletterValues } from '@/utils/validators';
import { subscribeNewsletter } from '@/services/api';

export function NewsletterForm({ onToast }: { onToast: (message: string) => void }) {
  const errorId = useId();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema), defaultValues: { email: '', website: '' } });

  const onSubmit = async (values: NewsletterValues) => {
    await subscribeNewsletter(values);
    reset({ email: '', website: '' });
    onToast(footer.newsletter.toast);
  };

  return (
    <div className="newsletter-wrap">
      <h3>{footer.titles.updates}</h3>
      <form className="newsletter" onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type="email"
          autoComplete="email"
          placeholder={footer.newsletter.placeholder}
          aria-label={footer.newsletter.label}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? errorId : undefined}
          {...register('email')}
        />
        <input className="honeypot" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register('website')} />
        <button type="submit" disabled={isSubmitting} aria-label={footer.newsletter.subscribe}>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </form>
      {errors.email && (
        <small id={errorId} className="field-error" role="alert">
          {errors.email.message}
        </small>
      )}
    </div>
  );
}
