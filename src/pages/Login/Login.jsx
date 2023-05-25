import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const captchaRef = useRef()
    const [disabled, setDisabled] = useState(true)
    const {sinIn} = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password)
        sinIn(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
    } 

    const handleValidateCaptcha = () =>{
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value, false)==true) {
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    useEffect(() =>{
        loadCaptchaEnginge(6); 
    },[])
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card  w-full max-w-sm md:w-1/2 shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input ref={captchaRef} type="text" name="Captcha" placeholder="type the captcha above" className="input input-bordered" />
            <button  onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
        </div>
        <div className="form-control mt-6">
          <input disabled={disabled} type="submit"className="btn btn-primary" value='login' name="" id="" />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;