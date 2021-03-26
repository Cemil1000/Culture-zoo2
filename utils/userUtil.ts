import { User } from "culturzoo"

type BuildUserFunc = (doc: any) => User


export const buildUser: BuildUserFunc = (doc) => ({
    uid: doc.id,
    email: doc.data().email,
    name: doc.data().name
})