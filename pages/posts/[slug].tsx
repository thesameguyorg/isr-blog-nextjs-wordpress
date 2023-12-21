import Head from 'next/head'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Tags from '../../components/tags'
import { CMS_NAME } from '../../lib/constants'

export default function Post({ post, posts, preview }) {
  const morePosts = posts?.edges

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        <>
          <article>
            <Head>
              <title>
                {`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
              </title>
              <meta
                property="og:image"
                content={post.featuredImage?.node.sourceUrl}
              />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage}
              date={post.date}
              author={post.author}
              categories={post.categories}
            />
            <PostBody content={post.content} />
            <footer>
              {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
            </footer>
          </article>

          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      </Container>
    </Layout>
  )
