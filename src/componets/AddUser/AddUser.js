import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = () => {
    return (
        <Card >
            <form className={classes.form}>
                <label htmlFor="Name" className={classes.label} >Name</label>
                <input type="text" className={classes.input}></input>
                <label htmlFor="Name" className={classes.label} >Age</label>
                <input type="number " className={classes.input}></input>
                <button>Send me</button>

            </form>
        </Card>
    )

}
export default AddUser;