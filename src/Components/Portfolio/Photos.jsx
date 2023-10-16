import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Photos = ({ card }) => {
  const { id,title, img } = card;
  return (
    <div>
      <Link to={`/project2/${id}`}><div className="card max-w-sm md:max-w-xl mx-auto  bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt={title}
            className="w-full h-52"
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

export default Photos;
Photos.propTypes = {
  card: PropTypes.obj
};
