import { CreateUserParam, User } from 'culturzoo'
import { buildUser } from '../utils/userUtil'
import firebase from './firebase'

const firestore = firebase.firestore()

type insertUserFunc = (param: User) => Promise<User>
type GetUserByUidFunc = (uid: string) => Promise<User>

export const insertUser: insertUserFunc = async (user) => {
    await firestore.collection('users').doc(user.uid).set(user)
    return user
}

export const getUserByUid: GetUserByUidFunc = async (uid) => {
    const doc = await firestore.collection('users').doc(uid).get();

    if (doc.exists) {
        return buildUser(doc)
    }

    return undefined
}