import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles.css";
import { TestWeather } from '../TestAuth/index';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='container-home'>
      <h1 style={{color: 'var(--color-primary)', fontSize: 50}}>Home</h1>
      <button onClick={() => navigate('/login')}>SignIn</button>
      <button onClick={() => navigate('/register')}>SignUp</button>
      <button onClick={() => TestWeather()}>WeatherForecast</button>
      <button>Sair</button>
    </div>
  )
}

export default Home
