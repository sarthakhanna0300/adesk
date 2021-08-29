// const base_url="https://backendeducationportal.herokuapp.com";
const base_url="http://localhost:3000";

const CONTACT_US=(name,email,query)=>
{    
    console.log(JSON.stringify({name:name,email:email,query:query}))
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name:name,email:email,query:query})
    };
      return fetch(base_url+'/contact_us', requestOptions)
        
}
const signup =(username,email,password)=>
{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({username,email,password})
    };
    console.log(JSON.stringify({username,email,password}))
    return fetch(base_url+'/users', requestOptions)
}
const login=(email,password)=>
{
    console.log(JSON.stringify({email,password}));
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({email,password})
    };
      return fetch(base_url+'/login', requestOptions)
}
const getAdvertisements=()=>
{
    const requestOptions = {
        method: 'GET',
    };
    return fetch(base_url+'/advts', requestOptions)
}

const authguard=()=>
{
     return !!localStorage.getItem("token");
}
const logout=()=>
{
     localStorage.removeItem("token");
     localStorage.removeItem("name");
}

const create =(title,desc,image,show)=>
{
    console.log(Headers);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,
        'Authorization' :`bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify({title,desc,image,show})
    };
    console.log(JSON.stringify({title,desc,image,show}))
    return fetch(base_url+'/advts', requestOptions)
}
export {signup, getAdvertisements, login, authguard,create}