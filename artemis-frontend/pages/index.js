import { useUser } from '@auth0/nextjs-auth0';
import Landing from '../components/Landing';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'

export default function Home() {
  const {user, isLoading, error} = useUser();

  return (
    <div className={styles.container}>
     <Layout>
      {!user || isLoading ? (
        <Landing />

      ):(<h1>Hello {user.name}</h1>)}
     </Layout>
    </div>
  )
}
