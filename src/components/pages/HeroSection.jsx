const HeroSection = () => {
    return (
      <div className="hero-container">
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--NoUVJdvB--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://images.unsplash.com/photo-1585362028211-dee1aba5fdd3%3Fixid%3DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%253D%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1350%26q%3D80" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>My Projects</h1>
          <p>Otro texto descriptivo si es necesario.</p>
        </div>
      </div>
    );
  }
  
  export default HeroSection;