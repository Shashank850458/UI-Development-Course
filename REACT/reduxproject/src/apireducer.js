const Apilist=(state=[],action)=>{
    let mydata =Object.assign([],state);
    if(action.type === 'saveapi')
    {
        mydata=action.mydata;
    }
    return mydata;
}

export default Apilist;