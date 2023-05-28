import React, { useState, Dispatch, SetStateAction } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import styles from './navbar.module.scss';
import { AppRoutes, Route, appRoutes } from '../../views/router/routes'
import classNames from 'classnames';

type NavbarProps = {
    setActiveTab: Dispatch<SetStateAction<Route>>,
    appRoutes: AppRoutes,
  };
  

  const Navbar: React.FC<NavbarProps> = ({ setActiveTab, appRoutes }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const openSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const betterNavClass = classNames(styles['nav-menu'], {[styles.active]: isSidebarOpen})
    return (
        <>
            <div className={styles.navbar}>
                <FaIcons.FaBars onClick={openSidebar} />
            </div>
            <nav className={betterNavClass}>
                <ul className={styles['nav-menu-items']} onClick={openSidebar}>
                    <li className={styles['navbar-toggle']}>
                        <AiIcons.AiOutlineClose />
                    </li>
                    {Object.values(appRoutes).map((route, index) => (
                            <li key={index} className={styles['navbar-toggle']} onClick={() => setActiveTab(route)}>
                                {route.label}
                            </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
