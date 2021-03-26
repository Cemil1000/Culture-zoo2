import React, { FormEvent, EventHandler } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import WithJs from '../components/WithJs'
import Withts from '../components/Withts'
import { useState } from 'react'
import { createUser } from '../lib/auth'
import { UserPost } from 'culturzoo'



export default function Authentication() {
    const [form, setForm] = useState<UserPost>({email: '', password: '', name: ''})


  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setForm({...form, [e.currentTarget.name]: e.currentTarget.value})
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    await createUser(form)
  }


  return (
    <div>
      <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: "column", alignItems: 'flex-start'}}>
        <input type="text" placeholder="email" name="email" value={form.email} onChange={handleChange} />
        <input type="text" placeholder="name" name="name" value={form.name} onChange={handleChange} />
        <input type="text" placeholder="prassword" name="password" value={form.password} onChange={handleChange} />
        <button type="submit">Inscription</button>
      </form>
    </div>
  )
}