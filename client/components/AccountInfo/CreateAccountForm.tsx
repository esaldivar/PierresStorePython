import { useState } from 'react';
import { accountInfoType } from '../../types/utilityTypes';
import { addUser } from '../../utilities/mutations';
import axios from 'axios';

const CreateAccountForm = () => {
  const [accountInfo, setAccountInfo] = useState<accountInfoType>({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    password: '',
  });

  const createUser = (userInfo: accountInfoType) => {
    axios
      .post('/graphql', {
        query: addUser(
          userInfo.firstName,
          userInfo.lastName,
          userInfo.emailAddress,
          userInfo.phoneNumber,
          userInfo.password
        ),
      })
      .then((res) => {
        console.log(res);
      })
      .catch(console.error);
  };

  return (
    <form className="flex-col">
      <input
        className="w-full px-2 py-2 mb-2 text-gray-500 bg-lightBrown"
        type="text"
        name="email"
        placeholder="Email Address"
        onChange={(e) => {
          setAccountInfo({ ...accountInfo, emailAddress: e.target.value });
        }}
      />
      <input
        className="w-full px-2 py-2 mb-2 text-gray-500 bg-lightBrown"
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={(e) => {
          setAccountInfo({ ...accountInfo, firstName: e.target.value });
        }}
      />
      <input
        className="w-full px-2 py-2 mb-2 text-gray-500 bg-lightBrown"
        type="text"
        name="lastName"
        placeholder="Last name"
        onChange={(e) => {
          setAccountInfo({ ...accountInfo, lastName: e.target.value });
        }}
      />
      <input
        className="w-full px-2 py-2 mb-2 text-gray-500 bg-lightBrown"
        type="text"
        name="phoneNumber"
        placeholder="Mobile phone number"
        onChange={(e) => {
          setAccountInfo({ ...accountInfo, phoneNumber: e.target.value });
        }}
      />
      <input
        className="w-full px-2 py-2 mb-2 text-gray-500 bg-lightBrown"
        type="text"
        name="password"
        placeholder="Create password"
        onChange={(e) => {
          setAccountInfo({ ...accountInfo, password: e.target.value });
        }}
      />
      <button
        type="submit"
        value="Create account"
        className="w-full py-2 font-bold text-white rounded bg-greenTitle"
        onClick={(e) => {
          e.preventDefault();
          createUser(accountInfo);
        }}
      >
        Create account
      </button>
    </form>
  );
};

export default CreateAccountForm;
