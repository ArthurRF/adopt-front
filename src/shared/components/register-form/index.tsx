// import axios from 'axios'
import { useState } from 'react'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setErrorMessage('Verifique se as senhas estão escritas corretamente..')
    } else {
      setErrorMessage('')

      // todo: implement this call

      // const registeredUser = await axios.post(
      //   `${process.env.API_URL}/users/register`,
      //   {
      //     email,
      //     password,
      //   },
      // )

      // alert(registeredUser)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='mx-auto max-w-md'>
      <div>
        <label htmlFor='email' className='block font-medium text-gray-700'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          required
        />
      </div>

      <div className='mt-4'>
        <label htmlFor='password' className='block font-medium text-gray-700'>
          Senha
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          minLength={8}
          required
        />
      </div>

      <div className='mt-4'>
        <label
          htmlFor='confirmPassword'
          className='block font-medium text-gray-700'
        >
          Confirme a Senha
        </label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          className='mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          minLength={8}
          required
        />
        {errorMessage && <p className='mt-2 text-red-500'>{errorMessage}</p>}
      </div>

      <div className='mt-4'>
        <button
          type='submit'
          className='w-full rounded-md bg-red-mid px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          Register
        </button>
      </div>
    </form>
  )
}

export { RegisterForm }
