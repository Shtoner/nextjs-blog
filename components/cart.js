import Image from "next/image";
import Link from "next/link";
import cart from '../public/images/cart.png'
import utilStyles from '../styles/utils.module.css';
import Tooltip from './tootltips.js'
import styles from '../styles/utils.module.css'

export default function Cart(){
    return(
        <>
            <div id={styles.tooltip} data-size='checkout'>
        < Link href={'/buyPage'}>
        <Image 
        alt='plants'
        width={144}
        height={144}
        src='/images/cart.png'
        ></Image>
        </Link>
        </div>
        </>
    )
}