import Layout from "../../components/layout";
import { useEffect, useState } from "react";
import  cheerio  from "cheerio";
import Link from "next/link";
export async function getStaticProps(){



    const res = await fetch('https://en.wikipedia.org/wiki/Blackberry')
    const data = await res.text()
    
    const $ = cheerio.load(data);
    const links = [];
    $('p').each((i, element) => {
      links.push($(element).text());
    });
  
    const description = $('meta[name="description"]').attr('content');
    const description2 = $('p').attr('content');

  
    return {
        props:{wikiData:{
            data:data,
            links:links,
            // summary: description2
        }}
    }
}

export default function CheckOut({wikiData}){

    // async function Call(){
    //     const response = await fetch('https://reddit.com/');
    //     const body = await response.text();
    //     console.log(body);
    // }
    console.log(wikiData.links[1])
       
    //   if (isLoading) return <p>Loading...</p>
      if (!wikiData) return <p>No profile data</p>
    
    
    
      return (
        <Layout>
        <h5>Scraped From <Link href={'https://en.wikipedia.org/wiki/Strawberry'}>Wikipedia</Link></h5>
          <h6>{wikiData.links[3]}</h6>
          <p>{wikiData.bio}</p>
        </Layout>
      )
    }
