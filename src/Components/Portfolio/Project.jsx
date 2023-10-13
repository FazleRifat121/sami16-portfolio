import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Project = ({ card }) => {
  const { id,title, img } = card;
  return (
    <div>
      <Link to={`/project1/${id}`}><div className="card w-80 mx-auto md:w-[18rem] h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {title}
          </h2>
       
        </div>
      </div></Link>
    </div>
  );
};

export default Project;
Project.propTypes = {
  card: PropTypes.obj
};
