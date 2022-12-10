import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date'

// export async function getStaticprops(){
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts = await res.json()
//   return {
//     props:{posts}
//   }
// }
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  const allPostsData = getSortedPostsData();
  // console.log(allPostsData)
  return {
    props: {
      posts,
      allPostsData
    },
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>I made this site in <a href='https://nextjs.org'>Next.js!</a></h2>
        <p>I can build a responsive web 
          experience tailored for different
           tasks through the use of <a href='https://reactjs.org/'>React</a> or
            vanilla JS, CSS, and HTML. 
            Along with these basics, I can
             incorporate different libraries
              and software to accomplish 
          tasks like a 3d world with 
          simulated physics and movements,
           a site that reacts to the way you
            move your mouse and other inputs
             to catch the eye of the user,
          manage source control, webscrape,
           and develop 3d models and textures
            for them.</p>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      <Link href='posts/[id].js'>ye</Link>
    </Layout>
  )
}
