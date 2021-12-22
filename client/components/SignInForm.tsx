import { useState } from 'react';
import axios from 'axios';
import { getUser } from '../utilities/queries';
import { loginInfoType } from '../types/utilityTypes';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const [loginCreds, setLoginCreds] = useState<loginInfoType>({
    emailAddress: '',
    password: '',
  });

  const navigate = useNavigate();

  const loginAttempt = (loginInfo: loginInfoType) => {
    axios
      .post('/graphql', {
        query: getUser(loginInfo.emailAddress, loginInfo.password),
      })
      .then((res) => {
        const authenticated = res.data.errors == undefined ? true : false;
        if (authenticated) {
          const sessionDataEmail = res.data.data.user.user.emailAddress;
          localStorage.setItem('email', sessionDataEmail);
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="flex-col">
      <input
        className="w-full px-2 py-2 mb-2 text-gray-500 bg-lightBrown"
        type="text"
        name="email"
        placeholder="Email Address"
        onChange={(e) => {
          setLoginCreds({
            ...loginCreds,
            emailAddress: e.target.value,
          });
        }}
      />
      <input
        className="w-full px-2 py-2 mb-2 text-gray-500 bg-lightBrown"
        type="text"
        name="password"
        placeholder="Password"
        onChange={(e) => {
          setLoginCreds({
            ...loginCreds,
            password: e.target.value,
          });
        }}
      />
      <button
        type="submit"
        value="Create account"
        className="w-full py-2 font-bold text-white rounded bg-greenTitle"
        onClick={(e) => {
          e.preventDefault();
          loginAttempt(loginCreds);
        }}
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
