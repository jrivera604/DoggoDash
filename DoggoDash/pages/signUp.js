import Navbar from '@/src/components/nav.js' 
// import SignUpForm from '@/src/components/signUpForm' 
import SignupForm from '@/src/components/signUp/signUpFormik' 
export default function SignUp () {
  return (
<div>
<Navbar/>
<SignupForm/>
{/* <SignUpForm/> */}
</div>

  );
}