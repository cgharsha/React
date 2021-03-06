import { Link, NavLink } from "react-router-dom";

import classes from './MainHeader.module.css'


const MainHeader = () => {
    return <header className={classes.header}>
        <nav>
            {/* <ul>
                <li><Link to='/welcome'>Welcome</Link></li>
                <li><Link to='/products'>Products</Link></li>
            </ul> */}
            <ul>
                <li><NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink></li>
                <li><NavLink activeClassName={classes.active}  to='/products'>Products</NavLink></li>
            </ul>
        </nav>
    </header>
};

export default MainHeader;