// import React, { useState } from "react";
// import { GithubAuthProvider,  GoogleAuthProvider,  getAuth, signInWithPopup, signOut } from "firebase/auth";
// import app from "../../FairBase/firebass.config";


// const LoginWithGoogle = () => {
//     const [user, setUser] = useState(null);

//     const auth = getAuth(app)
//     console.log(app)
//     const provider = new GoogleAuthProvider()
//     const gitHabProvider= new GithubAuthProvider()

//     const handleGoogleSingIn = () => {
//         signInWithPopup(auth, provider)
//             .then(result => {
//                 const logInUser = result.user;
//                 console.log(logInUser);
//                 setUser(logInUser)
//             })
//             .catch(error => {

//                 console.log('error', error.message)
//             })
//     }
//     const handleGitHabSingIn = () => {
//         signInWithPopup(auth, gitHabProvider)
//             .then(result => {
//                 const logInUser = result.user;
//                 console.log(logInUser);
//                 setUser(logInUser)
//             })
//             .catch(error => {

//                 console.log('error', error.message)
//             })
//     }


//     const handleGoogleSingOut = () => {

//         signOut(auth)
//             .then(resut => {
//                 console.log(resut)
//                 setUser(null)

//             })
//             .catch(error => {

//                 console.log(error)
//             })

//     }



//     return (

//         <div>
          
//                     <button onClick={handleGoogleSingOut}>Singout</button> 
//                    <br />
//                     <button onClick={handleGoogleSingIn}>login</button>
//                     <br />
//                     <button onClick={handleGitHabSingIn}>GitHab Singin</button>
                    
           
           

//         </div>

//     )
// }
// export default LoginWithGoogle;