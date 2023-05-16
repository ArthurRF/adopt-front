import { RegisterForm } from '@/shared/components/register-form'

export default function Login() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100'>
      <div className='w-3/4 rounded-md bg-white px-6 py-8 shadow-md md:w-1/2 lg:w-1/3'>
        <h1 className='mb-8 text-center text-3xl font-bold text-gray-900'>
          Cadastre-se
        </h1>
        <div className='mt-4'>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
