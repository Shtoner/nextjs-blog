import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';

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
    <div className={utilStyles.body}>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>I made this site in <a className={utilStyles.listItem1}href='https://nextjs.org'>Next.js!</a></h2>
        <p>I can build a responsive web 
          experience tailored for different
           tasks through the use of <a className={utilStyles.listItem1} href='https://reactjs.org/'>React</a> or
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
      <section className={`${utilStyles.headingLg} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link className={utilStyles.listItem3} href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              {date}<h6>This was statically generated with getStaticProps</h6>
            </li>
          ))}
        </ul>
      </section>
      <h1><Link className={utilStyles.listItem2} href='/posts/ye'>ye</Link>
      </h1><br/>
      <h1><a href='https://react-portfolio-chi-ashen.vercel.app/' className={utilStyles.listItem2}> Check out my React portfolio!</a>
      </h1>
    </Layout></div>
  )
}
