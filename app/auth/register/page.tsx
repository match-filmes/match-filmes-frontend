import { Metadata } from 'next'
import RegisterForm from './components/register-form'

export const metadata: Metadata = {
  title: 'Cadastro',
  description: 'Realize o cadastro para aproveitar os melhores sucessos.',
}

export default function Register() {
  return <RegisterForm />
}
