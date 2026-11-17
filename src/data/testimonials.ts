import { images } from './images';

export const testimonials = [
  {
    quote:
      'Helvian gave our departments one place to see what is pending and who owns it. Handoffs are finally clear.',
    name: 'Dr. Nimali Perera',
    role: 'Clinical Operations Lead',
    image: images.nimali.src,
  },
  {
    quote: 'Before Helvian, tasks were lost between shifts. Now, everyone knows their role at any moment.',
    name: 'Sarah Jenkins',
    role: 'Head Nurse',
    image: images.sarah.src,
  },
  {
    quote: 'The workflow visibility has saved us hours every day. The handoffs are seamless.',
    name: 'Marcus Bennett',
    role: 'Care Coordinator',
    image: images.marcus.src,
  },
  {
    quote: 'The structured view makes it easier to keep every department aligned through a busy day.',
    name: 'Dr. Laila Morgan',
    role: 'Medical Centre Director',
  },
  {
    quote: 'We can see what needs attention without asking five different teams for an update.',
    name: 'Noah Okafor',
    role: 'Operations Manager',
  },
];

export const testimonialsCopy = {
  label: 'Testimonials',
  title: { before: 'Trusted by ', highlight: 'care teams', after: ' who need clarity.' },
  note: 'Illustrative demo testimonials',
  regionLabel: 'Customer testimonials',
  prev: 'Previous testimonial',
  next: 'Next testimonial',
  dot: 'Show testimonial',
  ratingLabel: 'Rated 5 out of 5',
  partnersLabel: 'Example organization names',
  partners: ['Oakhaven Health', 'Apex Clinic', 'Valley Care', 'Summit Medical'],
};
