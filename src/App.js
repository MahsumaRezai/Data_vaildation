import AddUser from "./componets/AddUser/AddUser";
import UserList from "./componets/AddUser/UserList";
import Header from "./componets/UI/Header";

const App = () => {
  return (
    <div>
      <Header />
      <AddUser />
      <UserList users={[]} />
    </div>
  )

}
export default App;