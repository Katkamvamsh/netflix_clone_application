import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
const[ apiData,setApiData]=useState({
  name:"",
  key:"",
  publish_at:"",
  typeof:""
})
const {id}=useParams();
const navigate=useNavigate()

const backToHome=()=>{
  navigate("/")
}
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTRlYjAxYWFiYTJiNjc0MjYwNzMyNWRiMDNmYjllNSIsIm5iZiI6MTc0MDM4OTQ0Mi4zMTIsInN1YiI6IjY3YmMzYzQyNDEwNjBhOGQ4ZmJlYWEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TBM1BI3TKVEhxuZDYEwklpS41NxK27Z0mvPFBBy8qHU'
    }
  };
  useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));},[])
  
  return (
      <div className='player'>
          <img onClickCapture={backToHome} className='back' src={back_arrow_icon} alt="Back" />
          <iframe width='90%' height='90%' 
              src={`https://www.youtube.com/embed/${apiData.key}`}
              title='trailer' allowFullScreen>
          </iframe>
          <div className="player-info">
              <p>{apiData.publish_at} </p>
              <p>{apiData.name}</p>
              <p>{apiData.type}</p>
             
          </div>
      </div>
  );
};


export default Player
