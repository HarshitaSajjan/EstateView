import React from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase.js';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';


export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
          const provider = new GoogleAuthProvider();
          const auth = getAuth(app);
      
          console.log('Starting sign-in with popup');
          const result = await signInWithPopup(auth, provider);
          console.log('Signed in with popup:', result);
      
          const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: result.user.displayName,
              email: result.user.email,
              photo: result.user.photoURL,
            }),
          });
      
          if (!res.ok) {
            throw new Error('Failed to authenticate with server');
          }
      
          const data = await res.json();
          console.log('Server response:', data);
          dispatch(signInSuccess(data));
          navigate('/');
        } catch (error) {
          console.log('Could not sign in with Google', error);
        }
      };
      
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
      Continue with Google
    </button>
  )
}
