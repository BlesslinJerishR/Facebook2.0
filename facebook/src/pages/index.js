import Head from 'next/head'
import Header from '../../components/Header'
import Login from '../../components/Login'
import Sidebar from '../../components/Sidebar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header/>
      {/* Login Component - Completed*/}
      {/* <Login/> */}
      <main>
        {/* Side Feed */}
        <Sidebar/>
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}
