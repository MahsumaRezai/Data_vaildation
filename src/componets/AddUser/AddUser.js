import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = () => {
    const AddUserHandler = (event) => {
        event.preventDefault()

    }
    return (
        <Card >
            <form className={classes.form} onSubmit={AddUserHandler}>
                <label htmlFor="Name" className={classes.label} >Frist name</label>
                <input type="text" className={classes.input}></input>
                <label htmlFor="Name" className={classes.label} >Last name</label>
                <input type="text " className={classes.input}></input>
                <label htmlFor="Name" className={classes.label} >Password</label>
                <input type="password " className={classes.input}></input>
                <Button>send me</Button>

            </form>
        </Card>
    )

}
export default AddUser;