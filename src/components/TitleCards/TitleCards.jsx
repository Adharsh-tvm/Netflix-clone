import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({title, category}) => {


  const [apiData, setApiData] = useState([])
  
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODM5YWJmY2MzYzVhMzAyNjNkYmYwZjA0ZTlkNmJhYSIsIm5iZiI6MTczNzY3MjE3MS44NTYsInN1YiI6IjY3OTJjNWViNDRlZjM5Yzg2MDE4M2QwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MB56DcT0_iVeUioa66CsxvkE1mIUiYHpYERJdriFwgg'
    }
  };
  
  

  const handlWheel = (event)=>{
    event.preventDefault;
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handlWheel); 
  },[])

  return (
    <div className='title-cards' >
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef} >
        {apiData.map((card, index)=>{
            return <div className="card" key={index} >
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards