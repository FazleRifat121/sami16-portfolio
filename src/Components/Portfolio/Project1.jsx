import PropTypes from "prop-types";

const Project1 = ({ card }) => {
  const { title, img } = card;
  return (
    <div>
      <div className="card max-w-sm mx-auto md:max-w-xl h-full bg-base-100 shadow-xl">
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
      </div>
    </div>
  );
};

export default Project1;
Project1.propTypes = {
  card: PropTypes.obj,
};
