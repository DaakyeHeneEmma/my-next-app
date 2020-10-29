import Link from 'next/link'
import styles from "./header.module.scss"


const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="mainHeader">
                <hr />
                    <ul> 
                    <h4 style={{float:'right',
                    marginTop:'-5px'
                }}>
                <Link href={'/'}>
                <a>Deway</a>
                </Link>
                </h4>
                     <ul>
                            <Link href={'/'}>
                                <a className={styles.head}>
                                <li className={styles.lists}>Home</li>
                                </a>
                            </Link>
                            <Link href={'../../components/headLinks/about'} as={'components/About'}>
                                <a className={styles.head}>
                                <li className={styles.lists}>About</li>
                                </a>
                            </Link>
                            <Link href={'../../components/headLinks/contacts'}  as={'components/contacts'}> 
                                <a className={styles.head}>
                                <li className={styles.lists}>Contacts</li>
                                </a>
                            </Link>
                            <Link href={'../../components/headLinks/management'}  as={'components/management'}>
                                <a className={styles.head}>
                                <li className={styles.lists}>Managements</li>
                                </a>
                            </Link>
                        </ul>
                    </ul>
                    <hr />
                </div>
            </div>
        </div>

    )
}

export default Header;
