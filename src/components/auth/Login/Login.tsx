import logoApp from '../../../assets/logo.svg';
import './Login.scss';

const Login = () => {
   return (
      <div className="container">
         <section className="left">
            <img src={logoApp} />
         </section>

         <section className="right">
            <div>
               LOGIN ADMIN
            </div>
         </section>
      </div>
   );
};

export default Login;