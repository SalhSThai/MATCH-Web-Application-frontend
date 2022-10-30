import LoginForm from './LoginForm'
import LogoOnLoginForm from './LogoOnLoginForm'

export default function LoginContainer() {
  return (
    <div className='flex flex-col w-[300px] '>
        <LogoOnLoginForm />
        <LoginForm />
      </div>
  )
}
