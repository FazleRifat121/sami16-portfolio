import { useEffect, useState } from "react";
import Project from "./Project";
import { PropTypes } from 'prop-types';
import Photos from "./Photos";
import Travel from "./Travel";


const Portfolio = () => {
    const [cards,setCards] = useState([])
    const [cards2,setCards2] = useState([])
    const [cards3,setCards3] = useState([])
    useEffect(()=>{
        fetch('project1.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    useEffect(()=>{
        fetch('project2.json')
        .then(res => res.json())
        .then(data => setCards2(data))
    },[])
    useEffect(()=>{
        fetch('project3.json')
        .then(res => res.json())
        .then(data => setCards3(data))
    },[])
  return (
    <div>
      <div className="ml-5 mt-8">
        <h1 className="text-xl text-gray-600 font-bold">PORTFOLIO</h1>
        <hr className="border border-green-400 " />
        <p>Welcome to my digital portfolio! I am Samiul Haque, a student with passion for technology, innovation, and problem-solving. Throughout my academic journey, I have honed my skills in various areas of computer science, including software development, data analysis, machine learning, and more. This portfolio serves as a showcase of my academic and personal projects.</p>
      </div>
     <div>
     <div className="mt-8">
      <h1 className="text-xl mx-auto text-center text-gray-600 font-bold w-32 ">Projects</h1>
      <hr className="border border-green-400 w-32 mx-auto " />
       
      </div>
      <div className="md:ml-5 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {
            cards.map(card =><Project key={card.id} card={card}></Project> )
        }
      </div>
     </div>
     <div>
     <div className="mt-8">
      <h1 className="text-xl mx-auto text-center text-gray-600 font-bold w-32 ">Photography</h1>
      <hr className="border border-green-400 w-32 mx-auto " />
       
      </div>
      <div className="md:ml-5 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {
            cards2.map(card =><Photos key={card.id} card={card}></Photos> )
        }
      </div>
     </div>
     <div>
     <div className="mt-8">
      <h1 className="text-xl mx-auto text-center text-gray-600 font-bold w-32 ">Travel</h1>
      <hr className="border border-green-400 w-32 mx-auto " />
       
      </div>
      <div className="md:ml-5 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {
            cards3.map(card =><Travel key={card.id} card={card}></Travel> )
        }
      </div>
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
