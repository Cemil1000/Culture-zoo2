import { User } from 'culturzoo';
import React, { createContext, useContext, useEffect } from 'react';
import firebase from './lib/firebase';
import { getUserByUid } from './lib/user'





const authContext = createContext<User | undefined>({uid: undefined, email: undefined, name: undefined});

function UserProvider({ children }) {
  const [user, setUser] = React.useState<User | undefined>();

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (doc) => {
      if (doc) {
          const currentUser = await getUserByUid(doc.uid)
          setUser(prevState => currentUser)
          return;
      }
      setUser(undefined);
    });
  }, []);

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
}

export function useUser() {
  return useContext(authContext);
}


export default UserProvider;
