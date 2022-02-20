import { GetStaticProps } from 'next'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Company - Página inicial</title>
      </Head>
      <div className="bg-white">
        <h1>Company - Página Inicial</h1>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    revalidate: 60 * 60, // 1 hour
    props: {}
  }
}
