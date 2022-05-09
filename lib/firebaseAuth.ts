import { auth, provider } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const handleSignIn = async (): { token: string; user: object } => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log(credential);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = {
      name: result.user.displayName,
      email: result.user.email,
      phone: result.user.phoneNumber,
      img: result.user.photoURL,
      userId: result.user.uid,
    };
    console.log({ token, user });
    return { token, user };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    throw new Error({
      errorCode,
      errorMessage,
      email,
      credential,
    });
  }
};
