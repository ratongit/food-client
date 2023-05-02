// import React, { useState } from "react";
// import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
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
//             {
//                 user ?
//                     <button onClick={handleGoogleSingOut}>Sing out</button> :
//                     <>
//                     <button onClick={handleGoogleSingIn}>login</button>
//                     <button onClick={handleGitHabSingIn}>GitHab Singin</button>
//                     </>
//             }
//             {user && <div>
//                 <h2>User:{user.displayName}</h2>
//                 <p> Email: {user.email}</p>
//             </div>
//             }

//         </div>

//     )
// }
// export default LoginWithGoogle;