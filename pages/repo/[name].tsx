import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Fetch from '@/helpers/fetch'
import RepoScreen from '@/screens/Repo'

export default function Repo(props) {
  const { isFallback } = useRouter()
  if (isFallback) return (<div>Loading...</div>)
  return <RepoScreen {...props} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await Fetch(`https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${params.name}`)
  const repo = await res.json()

  return {
    revalidate: 60,
    props: {
      ...repo,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await Fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`)
  const repos = await res.json()
  const paths = repos.map((repo) => `/repo/${repo.name}`)

  return {
    paths,
    fallback: true,
  }
}
