import { Fragment } from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <Fragment>
            <div className={classes.head}>
                <h1 className={classes.title}>Registeration From</h1>

            </div>

        </Fragment>
    )
}
export default Header;