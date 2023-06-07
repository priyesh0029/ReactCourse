

const ResturantDetails = ({ name,locality,areaName,cuisines,city}) => {
    console.log();
    return (
          
          <div className="ResturantDetails">
            <h1>{name}</h1>
            <h3>{areaName}, {city}</h3>
            <h3>cuisines:{cuisines?.join(', ')}</h3>
            <h3>locality:{locality}</h3>
            
          </div>
       
    );
  };
  
  export default ResturantDetails;