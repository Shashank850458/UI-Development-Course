const Productlist=(state=[],action)=>{

    let mydata =Object.assign([],state);
    if(action.type==="addproduct")
    {
        mydata.push(action.pinfo);
    }

    if(action.type==="removeproduct")
    {
        mydata.splice(action.pindex,1);
    }
    return mydata;
}

export default Productlist;