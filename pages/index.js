import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-gray-100 h-screen'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full flex justify-center items-center">
        <h1 className={styles.title}>
          Gustavo Peña <br />
          <span className="text-blue-600 font-bold">Frontend Developer</span>
        </h1>
      </main>
    </div>
  )
}
