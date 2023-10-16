
import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const TravelDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const parseID = parseInt(id);
  console.log(typeof(cards));
  console.log(parseID);
  
  const card = cards.find((card) => card.id === parseID);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <img
            src={card.img}
            className="max-w-xs md:max-w-xl  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{card.title}</h1>
            <p className="py-6">{card?.title_des}</p>
         
         
            
            <button className="btn btn-neutral" onClick={handleGoBack}>
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;


