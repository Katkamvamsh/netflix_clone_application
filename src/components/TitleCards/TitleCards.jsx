import  { useEffect, useRef, useState } from 'react'
import './TitleCards.css'

import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {
  const [apiData,setApiData]=useState([])
const cardsRef=useRef(null)
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTRlYjAxYWFiYTJiNjc0MjYwNzMyNWRiMDNmYjllNSIsIm5iZiI6MTc0MDM4OTQ0Mi4zMTIsInN1YiI6IjY3YmMzYzQyNDEwNjBhOGQ4ZmJlYWEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TBM1BI3TKVEhxuZDYEwklpS41NxK27Z0mvPFBBy8qHU'
  }
};

const handleWheel=(event)=>{
  event.preventDefault()
  cardsRef.current.scrollLeft+=event.deltaY
  }

useEffect(()=>{
  
fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
.then(res => res.json())
.then(data => setApiData(data.results))
.catch(err => console.error(err));
  cardsRef.current.addEventListener("wheel",handleWheel)
})


  return (
   <div className="title_cards_container">
    <h2> {title ? title:"POPULAR"}</h2> 
   {/* if we not pass '' title '' to the titlecards componet default it will be false and its take{ title:"popular"}   <div className="cards-container">*/}
       <div className='cards-container'  ref={cardsRef}>
{apiData.map((each_card,index)=>{
  return <Link to={`player/${each_card.id}`} className="card" key={index}>
    <img src={`http://image.tmdb.org/t/p/w500`+each_card.backdrop_path} alt="" />
    <p>{each_card.original_title} </p>
</Link>
})
}    </div>


   </div>
  )
}

export default TitleCards
