import SignInForm from '../components/SignInForm';

const SignIn = () => {
  return (
    <div className="w-1/3 m-auto">
      <h1 className="mb-2 text-2xl font-bold text-center text-primaryBrown">
        Sign into your account.
      </h1>
      <SignInForm />
      <button
        type="submit"
        value="Forgot password?"
        className="w-full py-2 mt-6 underline text-primaryBrown "
      >
        Forgot password?
      </button>
      <button
        type="submit"
        value="Create account"
        className="w-full py-2 mt-6 bg-white bg-opacity-50 border-2 rounded text-greenTitle border-greenTitle "
      >
        Create your account
      </button>
    </div>
  );
};

export default SignIn;
