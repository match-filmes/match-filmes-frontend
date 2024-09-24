import { Metadata } from 'next'
import LoginForm from './components/login-form'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Realize o login para aproveitar os melhores sucessos.',
}

export default function Register() {
  return <LoginForm />
}
