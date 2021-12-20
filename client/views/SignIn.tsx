import SignInForm from '../components/SignInForm';

const SignIn = () => {
  return (
    <div className="w-1/3 m-auto">
      <h1 className="mb-2 text-2xl font-bold text-center text-primaryBrown">
        Sign into your account.
      </h1>
      <SignInForm />
    </div>
  );
};

export default SignIn;
