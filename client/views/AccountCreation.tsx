import { Link } from 'react-router-dom';
import CreateAccountForm from '../components/AccountInfo/CreateAccountForm';

const AccountCreation = () => {
  return (
    <div className="w-1/3 m-auto">
      <h1 className="mb-2 text-2xl font-bold text-center text-primaryBrown">
        Create your account.
      </h1>
      <CreateAccountForm />
      <Link to={`/signin`}>
        <h4 className="m-auto mt-4 font-bold text-center underline text-2x1 text-primaryBrown ">
          Or sign in
        </h4>
      </Link>
    </div>
  );
};

export default AccountCreation;
