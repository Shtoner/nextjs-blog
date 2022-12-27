import Image from "next/image";
import Link from "next/link";
import utilStyles from '../styles/garden.module.css'
import Layout from "../components/layout";
import cart from "../components/cart";
import Cart from "../components/cart";

export default function Garden(){
    const names=['strawberries', 'lettuce', 'blackberry']

    const images= names.map(image=>{
        console.log(image)
        return (
<div className={utilStyles.container}>

        <Image className={utilStyles.list}
        key={image} 
        height={144}
        width={144}
        alt='plants'
        src={require(`../public/images/${image}.png`)}
        ></Image>
            <h1><Link className={utilStyles.list} href= {`plants/${image}`} >{image}</Link></h1>

</div>

        )
    })
    return(
        <Layout>
        <Cart/>

        <div className={utilStyles.bigContainer}>
            {images}
        </div>

        </Layout>
    )
}