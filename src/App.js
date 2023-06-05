import { useState } from "react";
import AddUser from "./componets/AddUser/AddUser";
import UserList from "./componets/AddUser/UserList";
import Header from "./componets/UI/Header";
import Footer from './componets/UI/Footer'

const App = () => {
  const [enterUserList, setEnterUserList] = useState([]);
  const addUersHandler = (name, lastname, password) => {
    setEnterUserList((pastData) => {
      return [...pastData, { name: name, lastname: lastname, password: password, id: Math.random().toString() }]

    });
  }


  return (
    <div>
      <Header />
      <main>
        <AddUser onAddUser={addUersHandler} />
        <UserList users={enterUserList} />
      </main>

      <footer>
        <Footer />

      </footer>
    </div>
  )

}
export default App;