const CreateAccountForm = () => {
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
        name="firstName"
        placeholder="First Name"
      />
      <input
        className="w-full px-2 py-2 mb-2 text-gray-500 bg-lightBrown"
        type="text"
        name="lastName"
        placeholder="Last name"
      />
      <input
        className="w-full px-2 py-2 mb-2 text-gray-500 bg-lightBrown"
        type="text"
        name="phoneNumber"
        placeholder="Mobile phone number (optional)"
      />
      <input
        className="w-full px-2 py-2 mb-2 text-gray-500 bg-lightBrown"
        type="text"
        name="password"
        placeholder="Create password"
      />
      <button
        type="submit"
        value="Create account"
        className="w-full py-2 font-bold text-white rounded bg-greenTitle"
      >
        Create account
      </button>
    </form>
  );
};

export default CreateAccountForm;
