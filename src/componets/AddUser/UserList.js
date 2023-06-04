import Card from '../UI/Card';
import classes from './UserList.module.css';

const UserList = (porps) => {
    return (
        <Card className={classes.use}>
            <ul>
                {porps.users.map((user) => (
                    <li >
                        {user.name} {user.password}({user.lastname} )
                    </li>
                ))}
            </ul>
        </Card>
    )

}
export default UserList;