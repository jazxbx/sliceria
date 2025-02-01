import { createFileRoute } from '@tanstack/react-router';
import Menu from '../../pages/Menu';

export const Route = createFileRoute('/sliceria/menu')({
  component: Menu,
});
