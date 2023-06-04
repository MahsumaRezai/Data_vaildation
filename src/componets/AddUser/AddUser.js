import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = () => {
    const [entreName, setentrename] = useState('');
    const [entreLastName, setenterLastName] = useState('');
    const [entrePassword, setentrPassword] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();
        if (entreName.trim().length <= 3 || entreLastName.trim().length <= 3 || entrePassword.trim().length === 0) {
            return;
        }
        setentrename('');
        setenterLastName('');
        setentrPassword('');
        console.log(entreName, entreLastName, entrePassword)
    }
    const nameEnterHandler = (event) => {
        setentrename(event.target.value)
    }

    const lastEnterHandler = (event) => {
        setenterLastName(event.target.value)
    }
    const passwordEnterHandler = (event) => {
        setentrPassword(event.target.value)
    }

    return (
        <Card >
            <form className={classes.form} onSubmit={AddUserHandler}>
                <label htmlFor="Name" className={classes.label} >Frist name</label>
                <input type="text" className={classes.input} onChange={nameEnterHandler} value={entreName} />

                <label htmlFor="Name" className={classes.label} >Last name</label>
                <input type="text " className={classes.input} onChange={lastEnterHandler} value={entreLastName} />

                <label htmlFor="Name" className={classes.label} >Password</label>
                <input type="password " className={classes.input} onChange={passwordEnterHandler} value={entrePassword} />
                <Button type="submit">send me</Button>


            </form>
        </Card>
    )

}
export default AddUser;