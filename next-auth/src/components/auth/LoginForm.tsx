import { CardWrapper } from "../ui/CardWrapper"



export  const LoginForm= ()=> {
  return (
    <CardWrapper 
        headLabel="Welcome back"
        backButtonLabel="Don't have a account"
        backButtonHref="/auth/login"
        showsocial  
    >
        login here
    </CardWrapper>
  )
}
