import { GetStaticProps } from 'next'
import Fetch from '@/helpers/fetch'
import HomeScreen from '@/screens/Home'

export default function Home(props) {
  return <HomeScreen {...props } />
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await Fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`);
  const repos = await res.json();

  return {
    revalidate: 60,
    props: {
      repos,
    },
  };
}
