import Image from "next/image";
import Link from "next/link";

export default function Cart(){
    return(
        < Link href={'/buyPage'}>
        <Image 
        title="checkout" 
        height={144}
        width={144}
        alt='plants'
        src={require(`../public/images/cart.png`)}
        ></Image>
        </Link>
    )
}