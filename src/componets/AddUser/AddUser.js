import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = () => {
    return (
        <Card className={classes.input}>
            <form>
                <label htmlFor="Name" >Name</label>
                <input type="text"></input>
                <label htmlFor="Name" >Age</label>
                <input type="number"></input>
                <button>Send me</button>

            </form>
        </Card>
    )

}
export default AddUser;