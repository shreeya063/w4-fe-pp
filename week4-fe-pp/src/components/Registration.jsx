import { useState } from 'react';
import Title from './Title'


const Registration = () => {
  const [Data, setData] = useState({name:"", email:"", password:""});
  const onSubmit = e => {
        e.preventDefault();

        const register = {
            ...Data,
            submittedOn: new Date()
        };

        console.log(register);
        setData({name:"", email:"", password:""});
    };

  return (
    <div>
    <form onSubmit={onSubmit}>
      <input id='name' type='text' placeholder='Name' onChange={e => setData({...Data, name: e.target.value})} value={Data.name} />
      <input id='email' type='text' placeholder='Email' onChange={e => setData({...Data, email:e.target.value})} value={Data.email} />
      <input id='password' type='text' placeholder="Password" onChange={e => setData({...Data, password:e.target.value})} value={Data.password} />
   
    <button type="submit" className="submit-btn">
          Register
    </button>
    </form>
    </div>

    
  );
}

export default Registration;