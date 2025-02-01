import { createFileRoute } from '@tanstack/react-router'
import Home from '../../pages/Home'

export const Route = createFileRoute('/sliceria/')({
  component: Home,
})
