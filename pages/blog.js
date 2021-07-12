import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration.js";

import CoverSection from '../components/cover/Cover.js'
import ArticleRowSection from '../components/blog/ArticlesRow.js'
import VideoRowSection from '../components/video/VideosRow.js'


export default function Store({coverPicture, articles, videos}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Africa Herbal Center - Decouverte</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CoverSection imageData={coverPicture}/>
        <ArticleRowSection articles={articles} />
        <VideoRowSection videos={videos} />
        <div style={{height: "200px"}}>
        </div>        
      </main>      
    </div>
  )
}

export async function getStaticProps() {
  const coverPicture0 = await Client().query(
    Prismic.Predicates.at("document.type", "blog_cover")
  );
  const articles0 = await Client().query(
    Prismic.Predicates.at("document.type", "article"),
    { orderings : '[my.article.last_publication_date desc]' }
  );
  const videos0 = await Client().query(
    Prismic.Predicates.at("document.type", "video"),
    { orderings : '[my.video.date desc]' }
  );

  const coverPicture = coverPicture0.results.map(info => {
    const container = {};
    container['id'] = info.id;
    container['url'] = info.data.picture.url;
    return container;
  })[0] 

  const articles = articles0.results.map(info => {
    const container = {};
    container['id'] = info.id;
    container['title'] = info.data.title;
    container['picture'] = info.data.picture.url;
    container['category'] = info.data.category;
    container['date'] = info.last_publication_date;
    container['slug'] = info.slugs[0];
    container['content'] = info.data.content;
    return container;
  })

  const videos = videos0.results.map(video => {
    const container = {};
    container['id'] = video.id;
    container['title'] = video.data.title;
    container['url'] = video.data.url.url;
    container['date'] = video.data.date;

    return container;
  })

  //console.log(coverPicture);
  
  return {
    props: {
      coverPicture,
      articles,
      videos,
    },
    revalidate: 10, // In seconds
  }
}
