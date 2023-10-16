import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Travel = ({ card }) => {
  const { id,title, img } = card;
  return (
    <div>
      <Link to={`/project3/${id}`}><div className="card max-w-sm md:max-w-xl mx-auto  bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt={title}
            className="w-full h-52"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">
           {title}
          </h2>
       
        </div>
      </div></Link>
    </div>
  );
};

export default Travel;
Travel.propTypes = {
  card: PropTypes.obj
};
