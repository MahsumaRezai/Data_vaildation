import Card from '../UI/Card';
import classes from './UserList.module.css';

const UserList = (porps) => {
    return (
        <Card className={classes.use}>
            <ul className={classes.cart}>
                {porps.users.map((user) => (
                    <li className={classes.list} key={user.id} >
                        {user.name} {user.lastname} {user.password}
                    </li>
                ))}
            </ul>
        </Card>
    )
}
export default UserList;