import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (porps) => {
    const [entreName, setentrename] = useState('');
    const [entreLastName, setenterLastName] = useState('');
    const [entrePassword, setentrPassword] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();
        if (entreName.trim().length <= 3) {
            return alert("Your name is not correct ")
        }
        else if (entreLastName.trim().length <= 3) {
            return alert(" Your Last name is not correct")

        }
        else if (entrePassword.trim().length === 0) {
            return ("Your Password is not correct ")

        }
        setentrename('');
        setenterLastName('');
        setentrPassword('');
        porps.onAddUser(entreName, entreLastName, entrePassword)
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
                <input type="text" className={classes.input} onChange={nameEnterHandler} value={entreName} id="input" />

                <label htmlFor="Last name" className={classes.label} >Last name</label>
                <input type="text " className={classes.input} onChange={lastEnterHandler} value={entreLastName} />

                <label htmlFor="Name" className={classes.label} >Password</label>
                <input type="password" className={classes.input} onChange={passwordEnterHandler} value={entrePassword} />
                <Button type="submit">send me</Button>


            </form>
        </Card>
    )

}
export default AddUser;