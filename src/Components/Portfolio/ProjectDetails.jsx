
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ProjectDetails = () => {
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

            <h3 className="text-3xl font-bold mt-1">Project overview</h3>
            {card?.description && <p className="py-6">{card?.description}</p>}
            <p className="py-6">
              <span className="text-xl font-bold">{card?.header1}: </span>{" "}
              {card.description1}
            </p>
            <p className="py-6">
              <span className="text-xl font-bold">{card?.header2}: </span>{" "}
              {card.description2}
            </p>
            <p className="py-6">
              <span className="text-xl font-bold">{card?.header3}: </span>{" "}
              {card.description3}
            </p>
            <p className="py-6">
              <span className="text-xl font-bold">{card?.header4}: </span>{" "}
              {card.description4}
            </p>
            <p className="py-6">
              <span className="text-xl font-bold">{card?.header5}: </span>{" "}
              {card.description5}
            </p>
            <p className="py-6">
              <span className="text-xl font-bold">{card?.header6}: </span>{" "}
              {card.description6}
            </p>
            <p className="py-6">
              <span className="text-xl font-bold">{card?.header7}: </span>{" "}
              {card.description7}
            </p>
            {/* technical */}
            {card?.technical && (
              <div>
                <h3 className="text-3xl font-bold mt-1">{card.technical}</h3>
                <p className="py-6">
                  <span className="text-xl font-bold">{card.thechHead1}: </span>{" "}
                  {card?.thechDes1}
                </p>
                <p className="py-6">
                  <span className="text-xl font-bold">{card.thechHead2}: </span>{" "}
                  {card?.thechDes2}
                </p>
                <p className="py-6">
                  <span className="text-xl font-bold">{card.thechHead3}: </span>{" "}
                  {card?.thechDes3}
                </p>
                <p className="py-6">
                  <span className="text-xl font-bold">{card.thechHead4}: </span>{" "}
                  {card?.thechDes4}
                </p>
                <p className="py-6">
                  <span className="text-xl font-bold">{card.thechHead5}: </span>{" "}
                  {card?.thechDes5}
                </p>
                <p className="py-6">{card.techend}</p>
              </div>
            )}
            <p className="py-6">{card.descriptionEnd}</p>
            <button className="btn btn-neutral" onClick={handleGoBack}>
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;


