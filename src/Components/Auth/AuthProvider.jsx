import {
  createUserWithEmailAndPassword,
 
  onAuthStateChanged,
 
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext,  useEffect,  useState } from "react";
import auth from "./Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic=useAxiosPublic()

  const createUserWithLogin = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
const siginInwithGoogle=()=>{
  return signInWithPopup(auth,provider)
}

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    if(currentUser){
//get token and store client side
//token 
const userInfo={email:currentUser.email}
axiosPublic.post('/jwt',userInfo)
.then(res=>{
  if(res.data.token)
    localStorage.setItem('access-token',res.data.token)
})
    }
    else{localStorage.removeItem('access-token')}

    setLoading(false)
  })
  return ()=>{
return unSubscribe
  }
},[axiosPublic])

const updateUserProfile=(name,photo)=>{
   return  updateProfile(auth.currentUser, {
  displayName: name, photoURL: photo
})


}

  const userInfo = {
    user,
    loading,
    createUserWithLogin,
    loginWithUser,
    userLogOut,
    updateUserProfile,
    siginInwithGoogle
  };
  return <AuthContext.Provider value={userInfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
