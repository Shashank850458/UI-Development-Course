function Mycompany(){
    let company =['TCS','Wipro','Infosys','Dell','Google','Oracle',
                   'Microsoft','Intel','Sony','Amezon','Flipcart','Jio','Tesla'];
    
    return(
        <div className="home">
            <h1> Company List:{company.length}</h1>
            {
                company.map((name,index)=>{
                    return(
                        <p key={index} className="five">{name}</p>
                    );
                })
            }
        </div>
    );
}

export default Mycompany;