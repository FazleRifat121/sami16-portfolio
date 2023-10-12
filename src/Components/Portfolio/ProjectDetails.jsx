import { useLoaderData, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const parseID = parseInt(id);
  const card = cards.find((card) => card.id === parseID);

  return (
    <div >
      <div className="hero min-h-screen">
        <div className="hero-content md:flex-row flex-col ">
          <img
            src={card.img}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{card.title}</h1>
            <p className="py-6">
              {card.description}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
