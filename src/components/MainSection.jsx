import "../../src/App.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Typed from "typed.js"; // Import Typed from the 'typed.js' library

export const MainSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/products');
  };
  useEffect(() => {
    const typeData = new Typed(".role", {
      strings: [
        "Summary",
        "Overview",
        "Chart",
        "Information",
        "HeatMap",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 90,
      backDelay: 1000,
    });

    return () => {
      typeData.destroy(); // Clean up Typed instance when component unmounts
    };
  }, []);

  return (
    <div>
      <div className="hero-section ">
        <div className="faded-text " >Stock Explorer</div>
        <div className="hero-section-left flex flex-col lg:flex-col dark:text-slate-100">
          <div className="hero-section-heading text-5xl font-bold ">Welcome to Stock Explorer</div>
          <div className="hero-section-heading hero-section-subheading">
            Stock <span className="role"></span>
          </div>
          <div className="hero-section-description">
          <p className="description-line">
            Empowering investors with comprehensive insights and tools to navigate the complexities of global stock exchanges
          </p>
          <p className="description-line">
            Discover new investment opportunities and make informed decisions
          </p>
          <p className="description-line">
            Stay ahead of market trends and optimize your investment strategies
          </p>
        </div>
     
          <div onClick={handleButtonClick} type="button" className="btn-pink" id="btn">Learn More</div>
        </div>

        <div className="hero-section-right">
          <div className="absolute icons icon-dots"></div>
          <div className="absolute icons icon-cube">
            {/* Uncomment and provide correct path */}
            {/* <img src="images/cube.png" alt="" /> */}
          </div>
          <div className="absolute icons icon-circle">
            {/* Uncomment and provide correct path */}
            {/* <img src="images/circle.png" alt=""> */}
          </div>
          <div className="absolute icons icon-zigzags">
            {/* Uncomment and provide correct path */}
            {/* <img src="images/zigzags.png" alt="" /> */}
          </div>
          <div className="absolute icons icon-plus">
            {/* Uncomment and provide correct path */}
            {/* <img src="images/plus.png" alt=""> */}
          </div>
          <div className="profile-image visual my-5 lg:max-w-xl">
            <img src="src/assets/images/frontstock.avif" alt="" height="350px" width="500px" className="rounded-lg max-h-full"/>
          </div>
        </div>
      </div>
      </div>

  );
};
