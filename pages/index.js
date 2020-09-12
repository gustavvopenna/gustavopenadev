import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import DarkModeToggle from '../components/DarkModeToggle'

export default function Home() {
  return (
    <div className='h-screen'>
      <Head>
        <title>Gustavo Peña | Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <div className="w-full flex justify-end p-5">
          <DarkModeToggle />
        </div>
        <div className="h-full px-10 flex flex-col justify-center items-start">
          <h1 className="font-bold text-6xl leading-tight">
            Gustavo Peña <br />
            <span className="text-blue-500 hover:text-blue-600 transition ease-in-out duration-200">Frontend Developer</span>
          </h1>
          <button className="call-to-action rounded p-2 hover:text-indigo-700 font-bold transition ease-in-out duration-200">
            Check out my LinkedIn
          </button>
        </div>
      </main>
    </div>
  )
}
