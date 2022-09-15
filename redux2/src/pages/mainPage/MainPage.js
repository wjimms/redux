import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNameAction, createUserAction, clearNameAction } from '../../action/Action';

function MainPage() {

     const dispatch = useDispatch();
     const name = useSelector(state => state.users.name)
     const users = useSelector (state => state.users.users)
     const createUser = () => {
        dispatch(createUserAction(name))
        dispatch(clearNameAction(" "))
     }

     const changeInput = (e) =>{
   
        dispatch(addNameAction(e.target.value))
     
     }     

  return (
    <div>
        <div>
            
        <input type="text" onChange={changeInput} value={name}/>
       
     
        <button onClick={createUser}>create user</button>
        </div>
        <ul>
            <li>
                users:
            </li>
            {users.map((user, key) => <li key={key}>{user}</li>)}
        </ul>

    </div>
  
  )
}

export default MainPage
