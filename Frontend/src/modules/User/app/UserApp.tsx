import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '../routes'

export default function UserApp() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
