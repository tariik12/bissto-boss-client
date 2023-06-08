import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSingIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname ||"/";
    const handleGoogleSingIn =() =>{
        googleSingIn()
        .then(result =>{
             const loggedUser =(result.user)
             console.log(loggedUser)
            if(loggedUser){
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then((data) => {
               console.log(data)
                    navigate(from, {replace:true});
                
            })
            }
        })
        .catch(error =>console.log(error.message))
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="text-center my-4">
            <button onClick={handleGoogleSingIn} className="btn btn-circle btn-outline">
               <FaGoogle/>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;