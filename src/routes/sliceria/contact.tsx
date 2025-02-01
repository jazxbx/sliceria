import { createFileRoute } from '@tanstack/react-router';
import Contact from '../../pages/Contact';

export const Route = createFileRoute('/sliceria/contact')({
  component: Contact,
});
