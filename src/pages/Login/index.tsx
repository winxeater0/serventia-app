import './styles.css'
import InputForm from '../../components/InputForm'
import { useNavigate } from 'react-router-dom'
import { FormEvent } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const Login = () => {

  const navigate = useNavigate();

  async function login(e: FormEvent<HTMLFormElement>){
      e.preventDefault()
      const formData = new FormData(e.currentTarget)

      const data = {
          email: formData.get("email-text"),
          password: formData.get("password-text")
      };

      const urlBase = "http://localhost:43644";
      axios.post(urlBase + "/login", {
          email: data.email,
          password: data.password
      })
      .then((response) => {
        if(response.request.status == 200){

          Cookies.set('accessToken', response.data.accessToken);
          Cookies.set('refreshToken', response.data.refreshToken);
          //redirect 
          navigate("/home") 
        }
        else{
          //mensagem de erro de acordo com o 401 ou cod recebido
        }
      });
  }

  async function rememberPassword(){
    
    //var hidden ={ !this.state.hidden ?  true : false }
  }

  return (
    <div className='container-login'>
      <div className='container-image'></div>
      <div className='container-form-login'>
        <div className='header-title'>
            <h1>Login</h1>
            <p className='description'>Welcome! You need to login to access the site content.</p>
        </div>
        <form onSubmit={login}>
            <InputForm 
              textValue='E-mail'
              type="email" 
              name='email-text' 
              id='email-text-input' 
              required
            />

            <InputForm 
              textValue='Password' 
              type="password" 
              name='password-text' 
              id='password-text-input'
            />
        <button type="submit">SignIn</button>
        </form>
        <div className="container-nav">
          <p>New User? <a className='signup a-text' onClick={() => navigate("/register")}>SignUp</a></p>
          <a className='a-text' href="#" onClick={rememberPassword}>Forgot your password?</a>
        </div>
      </div>
    </div>
  )
}

export default Login


