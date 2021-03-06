import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration.js";

import CoverSection from '../components/cover/Cover.js'
import ContactBlock from '../components/contact/ContactSection.js'

export default function Contact({coverPicture}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Africa Herbal Center - Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CoverSection imageData={coverPicture}/>
        <ContactBlock />
        <div style={{height: "200px"}}>
        </div>        
      </main>      
    </div>
  )
}

export async function getStaticProps() {
  const coverPicture0 = await Client().query(
    Prismic.Predicates.at("document.type", "cover_contact")
  );
  const articles0 = await Client().query(
    Prismic.Predicates.at("document.type", "article")
  );

  const coverPicture = coverPicture0.results.map(info => {
    const container = {};
    container['id'] = info.id;
    container['url'] = info.data.picture.url;
    return container;
  })[0] 

  //console.log(coverPicture);
  
  return {
    props: {
      coverPicture,
    },
    revalidate: 10, // In seconds
  }
}

