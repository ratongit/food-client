import { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../FairBase/firebass.config";
import { FaGitSquare, FaGoogle } from "react-icons/fa";
import './loginGit.css'

const LoginWithGoogle = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const gitHabProvider = new GithubAuthProvider()

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const logInUser = result.user;
                setUser(logInUser)
            })
            .catch(error => {

                console.log('error', error.message)
            })
    }
    const handleGitHabSingIn = () => {
        signInWithPopup(auth, gitHabProvider)
            .then(result => {
                const logInUser = result.user;
                setUser(logInUser)
            })
            .catch(error => {

                console.log('error', error.message)
            })
    }

    return (

        <div className="float-right">



            {
                !user ?

                    <div className="btn-git ">
                        <button className=" border-2 border-blue-400 w-100 p-2  rounded  mb-4" onClick={handleGoogleSingIn}><button > <FaGoogle className="icon me-2" />Google login</button></button> <br />
                        <button onClick={handleGitHabSingIn} className=" w-100 p-2 border-2 border-blue-400  rounded mb-5"><FaGitSquare className="icon" /> Login with Githab</button>
                    </div> : <>
                    </>
            }
            {user && <div className="text-center me-5 border-2 p-3 border-blue-500 rounded">
                <h1>User Details</h1>
                <hr />
                <br />
                <h2>User
                    <br />
                    {user.displayName}</h2>

                <br />              
                   <a href="/profile">
                    <button className="bg-slate-700 p-2 rounded " >Go to Profile</button>
                </a>
            </div>

            }

        </div>

    )
}
export default LoginWithGoogle;