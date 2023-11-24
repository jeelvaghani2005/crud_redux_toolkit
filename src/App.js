import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser, getuser, postuser, updateuser } from './redux-toolkit/api/api';

function App() {

  const [formdata, setformdata] = useState({})
  const [updata, setupdata] = useState({})

  const dispatch = useDispatch();
  const data = useSelector((state) => state.userreducer.data);

  useEffect(() => {
    dispatch(getuser());
  }, []);

  const change = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }
  const changeupdate=(e)=>{
    setupdata({ ...updata, [e.target.name]: e.target.value })
  }

  const submitdata = () => {
    dispatch(postuser(formdata))
  }

  // const deletedata = (id) => {
  //   dispatch(deleteuser(id))
  //   console.log(id);
  // }
  const deletedata = (id) => {
    dispatch(deleteuser(id))
    console.log(id);
  }
  
  const updatedata=()=>{
    dispatch(updateuser(updata))
  }
  
  const editdata=(val)=>{
    setupdata(val)
  }

  return (
    <div>

      <div className='App'>
        <div>
          <input type="text" name='name' onChange={change} placeholder='name' />
        </div>
        <div>
          <input type="text" name='email' onChange={change} placeholder='email' />
        </div>
        <button onClick={submitdata}>Submit</button>
      </div>

      <h3 className='App'>update data</h3>

      <div className='App'>
        <div>
          <input type="text" name='name' onChange={changeupdate} placeholder='name' value={updata.name} />
        </div>
        <div>
          <input type="text" name='email' onChange={changeupdate} placeholder='email' value={updata.email} />
        </div>
        <button onClick={updatedata}>Submit</button>
      </div>

      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>

          {
            data.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>
                      <button onClick={() => deletedata(val.id)} >Delete</button>
                      <button onClick={() => editdata(val)} >Edit</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>  
    </div>
  );
}

export default App;
