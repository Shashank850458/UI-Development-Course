const Userlist=(state=[],action)=>{
    let mydata =Object.assign([],state); //it collect old value from a state if any

    if(action.type ==="adduser")
    {
        mydata.push(action.fullname);
    }
    if(action.type==="removeuser")
    {
        mydata.splice(action.index,1);
    }
    return mydata;
}

export default Userlist;