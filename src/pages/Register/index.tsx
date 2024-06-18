import './styles.css'
import InputForm from '../../components/InputForm'
import { useNavigate } from 'react-router-dom'
import { FormEvent } from "react";
import axios from "axios";

const Register = () => {

  const navigate = useNavigate();

  async function register(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = {
        firstname: formData.get("first-name-text"),
        lastname: formData.get("last-name-text"),
        email: formData.get("email-text"),
        confirmemail: formData.get("confirm-email-text"),
        password: formData.get("password-text"),
        confirmpassword: formData.get("confirm-email-text")
    };

    const urlBase = "http://localhost:43644";
    axios.post(urlBase + "/register", {
        email: data.email,
        password: data.password
    })
    .then((response) => {
      if(response.request.status == 200){
        console.log("teste:"+response.data.accessToken) //redirect
        navigate("/login") // or redirect to main page already logged in
      }
    });
  }

  return (
    <div className='container-register'>
      <div className='container-image'></div>
      <div className='container-form-register'>
        <div className='header-title'>
            <h1>Register</h1>
            <p className='description'>Well... Here we begin!</p>
        </div>
        <form onSubmit={register}>
            <InputForm 
              textValue='First name'
              type="text" 
              name='first-name-text' 
              id='first-name-input' 
              required
            />

            <InputForm 
              textValue='Last name'
              type="text" 
              name='last-name-text' 
              id='last-name-input' 
              required
            />

            <InputForm 
              textValue='E-mail'
              type="email" 
              name='email-text' 
              id='email-input' 
              required
            />

            <InputForm 
              textValue='Confirm e-mail'
              type="email" 
              name='confirm-email-text' 
              id='confirm-email-input' 
              required
            />

            <InputForm 
              textValue='Password' 
              type="password" 
              name='password-text' 
              id='password-text'
              required
            />

            <InputForm 
              textValue='Confirm password' 
              type="password" 
              name='confirm-password-text' 
              id='confirm-password-text'
              required
            />
        <button type="submit">SignUp</button>
        </form>
        <div className="container-nav">
          <p><a className='a-text' onClick={() => navigate("/login")}><h2>Back ←</h2></a></p>
        </div>
      </div>
    </div>
  )
}

export default Register
