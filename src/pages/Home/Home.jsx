
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';




const Home = () => {
  return (    
    <div className='home'>
  
   
  
      <div className='hero-image'>
      <Navbar /> 
        <img src={hero_banner} alt='Hero Banner' className='banner-img' />
       
        <div className='hero-caption-container'>
          <img src={hero_title} alt='Hero Title' className='caption-img' />
          <p>
            When a user enters a URL in the web browser, the URLs in the urls.py file are compared and then the user receives the response for the requested URL after retrieving a corresponding view method.
          </p>
          <div className="hero_btns_container">
            <button className='btn ,dark_btn'>
             <img className="info_img"src={info_icon} alt=""  />  Info
            </button>
            <button className='btn' style={{backgroundColor:'white'} } >  <img src={play_icon} alt="" className='icon_img'/>Play
            </button>
          </div>
        <div className='a'> <TitleCards  /> </div>
         </div>
         </div>    
      <div className="more_cards">
        <TitleCards title={"Blockbuster Movies"} category={"popular"} />
        <TitleCards title={"Only on netflix"} category={"top_rated"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top picks for you"} category={"now_playing"}/>
      </div>
      <Footer />
        </div>
  );
}; 

export default Home;