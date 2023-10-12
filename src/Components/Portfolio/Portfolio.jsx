import { useEffect, useState } from "react";
import Project1 from "./Project1";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            cards.map(card => <Project1 key={card.id} card={card}></Project1>)
        }
      </div>
    </div>
  );
};

export default Portfolio;
