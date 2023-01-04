import SignUpForm from '../../components/signUp/signUp';
import SignIn from '../signIn/SignIn';

import './authentication.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUpForm />
    </div>
  );
};

export default Authentication;