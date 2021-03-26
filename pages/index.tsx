import React, { FormEvent, EventHandler } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import WithJs from '../components/WithJs'
import Withts from '../components/Withts'
import { useState } from 'react'
import { createUser } from '../lib/auth'
import { UserPost } from 'culturzoo'
import { useUser } from '../UserProvider'
import Game from './game'
import Authentication from './authentication'



export default function Home() {
  const user = useUser()


  if (user) {
    return <Game />
  }

  return <Authentication />
}
