import { createFileRoute } from '@tanstack/react-router';
import OurStory from '../pages/OurStory';

export const Route = createFileRoute('/about')({
  component: OurStory,
});
