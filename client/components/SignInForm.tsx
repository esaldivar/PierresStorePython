const SignInForm = () => {
  return (
    <form className="flex-col">
      <input
        className="w-full px-2 py-2 mb-2 text-gray-500 bg-lightBrown"
        type="text"
        name="email"
        placeholder="Email Address"
      />
      <input
        className="w-full px-2 py-2 mb-2 text-gray-500 bg-lightBrown"
        type="text"
        name="password"
        placeholder="Password"
      />
      <button
        type="submit"
        value="Create account"
        className="w-full py-2 font-bold text-white rounded bg-greenTitle"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
