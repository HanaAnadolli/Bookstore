import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

async function loginUser(payload) {
    const {email, password} = payload;
    const auth = getAuth();
    return await signInWithEmailAndPassword(auth, email, password);
}

export default loginUser;