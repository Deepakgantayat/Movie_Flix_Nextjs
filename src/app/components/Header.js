import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import {BiMoviePlay} from 'react-icons/bi'
const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    {/* <BiMoviePlay className={styles['home-icon']}/> */}
                    <Image src="/movie.webp" alt="my logo image" width={100} height={100}/>
                </Link>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;