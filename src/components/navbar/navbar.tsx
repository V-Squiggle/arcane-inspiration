import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import styles from './navbar.module.scss';
import { NavbarData } from './navbar-data';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const openSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return (
        <>
            <div className={styles.navbar}>
                <FaIcons.FaBars onClick={openSidebar} />
            </div>
            <nav className={isSidebarOpen ? styles['nav-menu'] + ' ' + styles.active : styles['nav-menu']}>
                <ul className={styles['nav-menu-items']} onClick={openSidebar}>
                    <li className={styles['navbar-toggle']}>
                        <AiIcons.AiOutlineClose />
                    </li>
                    {NavbarData.map((item, index) => {
                    return (
                        <li key={index} className={styles['navbar-toggle']}>
                                {item.label}
                        </li>
                    );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
