import {getAuth, createUserWithEmailAndPassword, updateProfile, signOut} from 'firebase/auth';

async function signUpUser(payload){
    
    const {username, email, password} = payload;

    const auth = getAuth();
    const result = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(result.user, {
      displayUsername: username
    })

    await signOut(auth);
}

export default signUpUser