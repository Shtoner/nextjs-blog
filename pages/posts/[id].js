import Layout from '../../components/layout';
import { getAllPostIds,getPostData } from '../../lib/posts';
import Head from 'next/head'


export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    // console.log(postData)
    return {
      props: {
        postData,
      },
    };
  }

export async function getStaticPaths(){
    const paths = getAllPostIds()
    return{
        paths,
         fallback: false
    }
}

export default function Post({postData}) {
  return (<Layout><h3>This page was dynamically routed.</h3>
      <b>
        {postData.title}
        </b>
    <br/>
    {postData.date}<br/>
  {postData.id}<br/>
  <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
  </Layout>)
}