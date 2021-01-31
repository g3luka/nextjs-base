import Head from 'next/head'
import Link from 'next/link'
import styles from './styles.module.css'
import Card from '@/components/Card'

export default function Home({ repos }) {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Home - Meus repositórios no GitHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Meus repositórios no GitHub
        </h1>
        <p className={styles.description}>
          Uma lista dos meus projetos públicos
        </p>

        <Card />

        { repos.map((repo) => (
          <div className={styles.grid} key={repo.node_id}>
            <Link href={`/repo/${repo.name}`}>
              <a className={styles.card}>
                <h3>
                  {`${repo.name} `}
                  &rarr;
                </h3>
                <p>{ repo.description }</p>
              </a>
            </Link>
          </div>
        ))}

      </main>

    </div>
  )
}
