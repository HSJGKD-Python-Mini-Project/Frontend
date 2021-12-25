import {useState} from 'react';

function useToken(){
    const getToken = () =>{
        const userToken = JSON.parse(localStorage.getItem('token'));

        return userToken?userToken: 'undefined'
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken)=>{
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
        
      }
    
      return {
          token,
          setToken: saveToken
      }
}

export default useToken;