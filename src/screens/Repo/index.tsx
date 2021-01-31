import Head from 'next/head'
import Link from 'next/link'
import styles from './styles.module.css'

export default function Repo(props) {
  const { name, description, language } = props

  return (
    <div className={styles.container}>
      <Head>
        <title>{ name }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <article>
          <h1 className={styles.title}>
            { name }
          </h1>

          <p className={styles.description}>
            { description }
            <code className={styles.code}>{ language }</code>
          </p>
        </article>

        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h3>Voltar para a Home &rarr;</h3>
              <p>Retornar ao início</p>
            </a>
          </Link>
        </div>
      </main>

    </div>
  )
}
