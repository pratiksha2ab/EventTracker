import React from 'react'
import { createContext, useState, useEffect } from "react";
import {firebase} from './firebase';


type ContextProps = {
 
  user: firebase.User | null;
 
  setUser: any;
 
};

export const AuthContext = createContext<Partial<ContextProps>>({});
export const AuthProvider = (props) => {
    const [user, setUser] = useState(null as firebase.User | null);
  
  
    useEffect(() => {
      initialLoad();
    }, []);
    const initialLoad = () => {
      firebase.auth().onAuthStateChanged(async (user) => {
        setUser(user);
       
      });
  
      
    };
  
    return (
      <AuthContext.Provider
        value={{
        
          user,
        
          setUser,
       
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  };


