function Mycity(){
    let city=['Bengluru','Mumbai','Kolkata','Dehli', 'Chennai','Jaipur','Hydrabad','Pune','Surat',
               'Ahamadabad','Lucknow','Varanasi'];

    return(
        <div className="home">
            <h1>City List:{city.length}</h1>
            {
                city.map((name,index)=>{
                    return(
                        <p key={index} className="five">{name}</p>
                    )
                })
            }
        </div>
    )           
}
export default Mycity;