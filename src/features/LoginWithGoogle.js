// import React, { useEffect, useState } from 'react';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import { gapi } from 'gapi-script';

// export default function LoginWithGoogle() {
//   const clientId =
//     '939537041811-u32sb2h2l769u5jcfg55ljq6jh9i9huv.apps.googleusercontent.com';

//   const [profile, setProfile] = useState(null);
//   useEffect(() => {
//     const initClient = () => {
//       gapi.client.init({
//         clientId: clientId,
//         scope: ''
//       });
//     };
//     gapi.load('client:auth2', initClient);
//   }, []);

//   const onSuccess = (res) => {
//     setProfile(res.profileObj);
//     console.log('success', res);
//   };
//   const onFaliure = (res) => {
//     console.log('falied', res);
//   };

//   const logOut = () => {
//     setProfile(null);
//   };

//   return (
//     <div>
//       {profile ? (
//         <div>
//           <img src={profile.imageUrl} alt="user image" />
//           <h3>User Logged In</h3>
//           <p>Name: {profile.name}</p>
//           <p>Email: {profile.email}</p>
//           <br />
//           <br />
//           <GoogleLogout
//             clientId={clientId}
//             buttonText="Log out"
//             onLogoutSuccess={logOut}
//           />
//         </div>
//       ) : (
//         <GoogleLogin
//           clientId={clientId}
//           buttonText="Sign in with google"
//           onSuccess={onSuccess}
//           onFailure={onFaliure}
//           cookiePolicy={'single_host_origin'}
//           isSignedIn={true}
//         />
//       )}
//     </div>
//   );
// }
