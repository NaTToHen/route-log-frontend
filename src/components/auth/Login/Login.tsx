import logoApp from '../../../assets/img/logo.svg';
import './Login.scss';

const Login = () => {

   function handleLogin(e: any) {
      e.preventDefault();
      window.location.href = "/dashboard"
   }
   
   return (
      <div className="container">
         <section className="left">
            <img src={logoApp} />
         </section>

         <section className="right">
            <div className='topoLogin'>
               <h1>LOGIN ADMIN</h1>
            </div>
            <div className='formLogin'>
               <form action="" method="post">
                  <label className='labelForm'>Usuario</label>
                  <input type="text" />
                  <label className='labelForm'>Senha</label>
                  <input type="password" />
                  <button type="submit" onClick={handleLogin}>Efetuar login</button>
               </form>
            </div>
         </section>
      </div>
   );
};

export default Login