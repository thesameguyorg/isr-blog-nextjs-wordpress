import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Post, { getStaticProps as postGetStaticProps, getStaticPaths as postGetStaticPaths } from '../pages/posts/[slug]'

const AppRouter = () => {
  const router = useRouter()
  const { asPath } = router

  if (asPath.startsWith('/posts/')) {
    return <Post />
  }

  return <ErrorPage statusCode={404} />
}

export const getStaticProps = async (context) => {
  return await postGetStaticProps(context)
}

export const getStaticPaths = async () => {
  return await postGetStaticPaths()
}

export default AppRouter
