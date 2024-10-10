import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';


import logo from '../../../../images/logo_dsp.png';

import style from './LoginScreen.module.scss';

export default function LoginScreen() {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isChecked, setIsChecked] = useState(false);

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
    
    const handleCheckbox = () => {
      setIsChecked(!isChecked);
    };
    
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();

      console.log('Email:', email);
      console.log('Password:', password);
    };

  return (
  <>

    <main className={style.loginContainer}>

      <form className={style.loginForm} onSubmit={handleSubmit}>

        <div className={`${style.logo} relative mb-8`}>
          <Image src={logo} className={style.svg} alt='logo desenvolve' />
        </div>

        <div className="relative mb-3">
          <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
            </svg>
          </div>

          <input 
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="bg-dspGray text-gray-900 text-xs rounded-lg block w-full ps-10 p-2.5 placeholder-gray-400 h-12" 
            placeholder="E-mail" 
          />
        </div>

        <div className="relative mb-5">
          <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"/>
            </svg>
          </div>

          <input 
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="bg-dspGray text-gray-900 text-xs rounded-lg block w-full ps-10 p-2.5 placeholder-gray-400 h-12" 
            placeholder="Senha" 
          />
        </div>

        <div className="flex justify-between items-start mb-5">
          <div className="flex items-center">
            <input 
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckbox} 
              value=""
              className="checkbox w-4 border border-gray-300 rounded" 
            />
            <label htmlFor="remember" className="ms-2 text-xs font-medium">{!isChecked ? "Manter conectado" : "Conectado!"}</label>
          </div>
          
          <label className="text-xs font-medium">
            <a href="#" className="font-medium hover:no-underline">
              <span className='underline hover:text-dspDarkBlue'>Esqueceu a senha?</span>
            </a>
          </label>
        </div>

        <div className="relative flex flex-row justify-between mb-2">
          <button type="submit" className="bg-dspDarkBlue hover:bg-dspDarkBlueHover text-white border border-dspDarkBlue font-medium w-full text-xs text-center p-3 rounded-full font-bold">
            Login
          </button>
        </div>

        <div className="relative flex flex-row justify-between mb-5">
          <button type="submit" className="bg-dspBlue hover:bg-dspBlueHover text-white border border-dspBlue font-medium w-full text-xs text-center p-3 rounded-full font-bold">
            Nova conta
          </button>
        </div>

        <div className="flex justify-center">
          <label className="text-xs font-medium text-center">
            <a href="#" className="font-medium hover:no-underline">Não tem uma conta?  
              <span className='underline hover:text-dspDarkBlue ms-1'>Faça aqui</span>
            </a>
          </label>
        </div>
      </form>

    </main>
      
    </>
  );
}