import { useEffect, useState } from "react";
import Project from "./Project";
import { PropTypes } from 'prop-types';


const Portfolio = () => {
    const [cards,setCards] = useState([])
    useEffect(()=>{
        fetch('project1.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
  return (
    <div>
      <div className="ml-5 mt-8">
        <h1 className="text-xl text-gray-600 font-bold">PORTFOLIO</h1>
        <hr className="border border-green-400 " />
        <p>I successfully completed a comprehensive C++ course at American International University Bangladesh. This course provided me with a strong foundation in C++ programming, covering both theoretical concepts and practical application. Here&apos;s what I gained:</p>
      </div>
      <div className="md:ml-5 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            cards.map(card =><Project key={card.id} card={card}></Project> )
        }
      </div>
    </div>
  );
};

export default Portfolio;
Project.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // Add more PropTypes for other properties if needed
  }).isRequired,
};
