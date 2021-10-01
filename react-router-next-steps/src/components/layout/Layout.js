import react from 'react'
import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
    return <react.Fragment>
        <MainNavigation />
        <main className={classes.main}>
            {props.children}
        </main>
    </react.Fragment>
}

export default Layout