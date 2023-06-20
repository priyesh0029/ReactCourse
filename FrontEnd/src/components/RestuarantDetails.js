// import "../../index.css"

const ResturantDetails = ({ name, locality, areaName, cuisines, city }) => {
  console.log();
  return (
    <div className=" text-center bg-gray-200 m-3 p-3">
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
      </div>
      <div className="justify-center flex-row">
        <h3>
          {areaName}, {city}
        </h3>
        <h3>cuisines:{cuisines?.join(", ")}</h3>
        <h3>locality:{locality}</h3>
      </div>
    </div>
  );
};

export default ResturantDetails;
