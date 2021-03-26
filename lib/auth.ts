import { User } from 'culturzoo';
import { CreateUserParam } from 'culturzoo';
import firebase from './firebase'
import {insertUser} from './user'
const auth = firebase.auth()





type createUserFunc = (param: CreateUserParam) => Promise<void>

export const createUser: createUserFunc = async ({email, name, password}: CreateUserParam) => {
    const {user: credentials} = await auth.createUserWithEmailAndPassword(email, password);
    await credentials.updateProfile({...credentials, displayName: name})
    const user: User = {
        uid: credentials.uid,
        email: credentials.email,
        name
    }
    await insertUser(user);
}