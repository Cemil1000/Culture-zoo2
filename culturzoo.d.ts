export interface User {
    uid: string | undefined,
    email: string | undefined
    name: string | undefined
}


export interface UserPost {
    email: string
    password: string
    name: string
}

export type CreateUserParam  = UserPost


