import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import Prismic from "prismic-javascript";
import { Client } from "../../prismic-configuration.js";
import { RichText} from "prismic-reactjs"

import ProductDetailsSection from '../../components/products/ProductDetails.js'


export default function Product({product}) {
    var title = "";
    if(product !== undefined){
        title = product.slug;
    }
    //console.log(product)
  return (
    <div className={styles.container}>
      <Head>
        <title>Africa Herbal Center - Produit {title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ProductDetailsSection product={product} />
                
      </main>      
    </div>
  )
}


export async function getStaticPaths() {
    const products0 = await Client().query(
      Prismic.Predicates.at("document.type", "product")
    );

    const products = products0.results.map(info => (
        info.slugs[0]
    ))
    //console.log(products);
    const paths = products.map((productSlug) => ({
      params: { slug: productSlug },
    }))
    //console.log(paths);
    return { paths, fallback: true }
}

export async function getStaticProps({params}) {
  const productSlug = params.slug;
  const products0 = await Client().query(
    Prismic.Predicates.at("document.type", "product")
  );

  var product1 = [];
  const products = products0.results.map(info => {
    const container = {};
    container['id'] = info.id;
    container['name'] = info.data.name;
    container['picture'] = info.data.picture.url;
    container['category'] = info.data.category;
    container['price'] = info.data.price;
    container['slug'] = info.slugs[0];
    container['description'] = info.data.description;

    if (container['slug'] === productSlug){
        product1.push(container);
    }

    return container;
  })
  const productB = {
      id: 0,
      name: '',
      picture: '',
      category: '',
      price: 0,
      slug: 'slug',
      description: ''
  };
  //console.log(coverPicture);
  const product = (product1[0] === undefined)?productB:product1[0];
  //console.log(products0.results);

  return {
    props: {
      product,
    },
    revalidate: 10, // In seconds
  }
}

