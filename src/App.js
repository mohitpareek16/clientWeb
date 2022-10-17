import React, { useEffect } from "react";
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import "./style.css";

// import { EffectCoverflow, Pagination } from "swiper";
import Silder from "./Silder"
import ReactPlayer from "react-player";
import background from "./img/Vector 30.svg"
import videoimg from "./img/bg.png"
import bgimg from "./img/Image.png"
import logo from "./img/KONTENTLOGOPNG2.png"
import fabicon from "./img/icon.png"
import profile from "./img/image 322.jpg"
import linkedin from "./img/LinkedinLogo.png"
import companyLogo from "./img/Logo 5.png"

;
// import youtubeLogo from "./img/YouTube-Logo-2017-present.jpg"
function App() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="app">
      <div className="navbar">

        <a href="#"><img src={logo} alt="logo" /></a>
        <div className="menu" >
          <a href="#" className='active'>Home</a>
          <a href="#">Testmonials</a>
          <a href="#">Our Services</a>
          <a href="#">About Us</a>
        </div>
        <button class="custom-btn btn-3"><span>Contact Us</span></button>
      </div>

      <div className='hersect' data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" >

        <h1 data-aos="fade-up"
          data-aos-anchor-placement="top-center">Creating <span>content</span> that captures <span>attention</span> </h1>
        <h2 data-aos="fade-up"
          data-aos-anchor-placement="top-center">We help brands grow by unleashing the potential of social media 🚀</h2>
        <div className='btnsect'>
          {/* <button className='custom-btn btn-3'><a href="#">Contact Us</a></button> */}
          <button class="custom-btn btn-3"><span>Contact Us</span></button>
          {/* <button className='btn-sec'><a href="#">About Us</a></button> */}
          <a href="#" class="button2">About us</a>

        </div>
      </div>

      <div className='youtube-video' data-aos="fade-up"
        data-aos-anchor-placement="top-center" >

        <ReactPlayer width={1014} height={550} className="player"
          url="https://www.youtube.com/watch?v=UVCP4bKy9Iw" data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        />
      </div>


      <div className='client-slider' data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" >
        <div className="center" >

          <div className="line">
            You are not alone. The pain of website creation is real
          </div>
        </div>
        <div className="center" data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <svg width="1287" height="576" viewBox="0 0 1287 576" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="5" width="1285" height="571" rx="20" fill="#8C52FF" />
            <path d="M1286 93.9003C728.43 168.221 197.012 87.5867 1 37.9798V1H1286V44.2934V93.9003Z" fill="#0E0C12" stroke="#0E0C12" />
          </svg>
        </div>
        <Silder  />
        <div className="center part2" >

          <div className="line2" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            Trusted by world class business owners
          </div>
          <div className="client-logo" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <img className="logo-profile" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <img className="logo-company" src={companyLogo} />
            <img className="logo-profile" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <img className="logo-company" src={companyLogo} />
            <img className="logo-profile" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <img className="logo-company" src={companyLogo} />
            <img className="logo-profile" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <img className="logo-company" src={companyLogo} />
            <img className="logo-profile" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <img className="logo-company" src={companyLogo} />
          </div>
        </div>
      </div>
      <div className='services' data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <h4 data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          Our Services
        </h4>
        <div className='services-card'>
          <div className='card' data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <div className='frame'>
              <img className='upper' src={videoimg} alt="bg" />
              <img className='bg' src={bgimg} alt="bg" />
            </div>
            <div className='content'>
              <h1 className='title'> Video Editing  </h1>
              <p className='highted'>We have edited 1000+ Videos for various Youtubers and Brands, </p>
              <p> We make sure that along with creative video editing, there are enough dopamine hits to retain viewers till the end of the video which is the most important factor for good Reach on social media. </p>

            </div>

          </div>

          <div className='card2' data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <div className='frame'>
              <img className='upper' src={videoimg} alt="bg" />
              <img className='bg' src={bgimg} alt="bg" />
            </div>
            <div className='content'>
              <h1 className='title'> Video Editing  </h1>
              <p className='highted'>We have edited 1000+ Videos for various Youtubers and Brands, </p>
              <p> We make sure that along with creative video editing, there are enough dopamine hits to retain viewers till the end of the video which is the most important factor for good Reach on social media. </p>

            </div>

          </div>

          <div className='card ' data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <div className='frame'>
              <img className='upper' src={videoimg} alt="bg" />
              <img className='bg' src={bgimg} alt="bg" />
            </div>
            <div className='content'>
              <h1 className='title'> Video Editing  </h1>
              <p className='highted'>We have edited 1000+ Videos for various Youtubers and Brands, </p>
              <p> We make sure that along with creative video editing, there are enough dopamine hits to retain viewers till the end of the video which is the most important factor for good Reach on social media. </p>

            </div>

          </div>

          <div className='card2' data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <div className='frame'>
              <img className='upper' src={videoimg} alt="bg" />
              <img className='bg' src={bgimg} alt="bg" />
            </div>
            <div className='content'>
              <h1 className='title'> Video Editing  </h1>
              <p className='highted'>We have edited 1000+ Videos for various Youtubers and Brands, </p>
              <p> We make sure that along with creative video editing, there are enough dopamine hits to retain viewers till the end of the video which is the most important factor for good Reach on social media. </p>

            </div>

          </div>
        </div>
      </div>


      <div className='keyfeature' data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">

        <div className='text'>
          <h1 className='head' data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            Key features to add value to your business
          </h1>
          <h2 className='smalltext' data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            This sounds simple, but it is beneficial to your business success.
          </h2>
        </div>
        <div className='card-style' >
          <div className='feature-card' data-aos="fade-up"
            data-aos-anchor-placement="top-center">

            <img src={fabicon} />
            <h3 className='innerhead' >
              Get Rid of Unreliable Freelancers
            </h3>
            <p className='sm-text'>Freelancers are good but when it comes to maintaining consistency in your content, issues from freelancers in the delivery of your content and managing them to do things on time can bother you and you will end up draining a lot of energy & time in hiring and managing only!
            </p>
          </div>

          <div className='feature-card' data-aos="fade-up"
            data-aos-anchor-placement="top-center">

            <img src={fabicon} />
            <h3 className='innerhead' >
              Seamless Communication
            </h3>
            <p className='sm-text'>You will never feel like you are outsourcing your work, our systematic workflow and smooth communication will keep things at an amazing pace. We are more of your team members rather than any agency.</p>
          </div>

          <div className='feature-card' data-aos="fade-up"
            data-aos-anchor-placement="top-center">

            <img src={fabicon} />
            <h3 className='innerhead' >
              Best Turnaround Time
            </h3>
            <p className='sm-text'>We have a record of delivering most of our projects a lot before deadlines, and most of our clients appreciate this quick & creative service.</p>
          </div>

          <div className='feature-card' data-aos="fade-up"
            data-aos-anchor-placement="top-center">

            <img src={fabicon} />
            <h3 className='innerhead' >
              Content Consulting
            </h3>
            <p className='sm-text'>When you take any service from us, content consulting is always an exclusive part we give to our clients,</p>
          </div>
        </div>

        {/* <img className='bg-feature' src={background} />  */}
      </div>

      <div className='founder' >
        <h1 data-aos="fade-up"
          data-aos-anchor-placement="top-center">Founder</h1>
        <div className='sect-founder'>
          <img src={profile} alt="bg" data-aos="fade-up"
            data-aos-anchor-placement="top-center" />
          <div className='content-founder' data-aos="fade-up"
            data-aos-anchor-placement="top-center" >
            <div className='text1'> “I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and faster and easier to work & increases our exposure.”</div>
            <div className='name' >
              <span>Mukul Purohit</span>
              <p>Founder</p>
            </div>
            <div className='socail'>
              <img src={linkedin} alt="bg" />
              <img src={linkedin} alt="bg" />
              <img src={linkedin} alt="bg" />
            </div>

          </div>
        </div>
      </div>



      <div className="foot" >
        <svg width="1280" height="461" viewBox="0 0 1280 461" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="1.01611" width="1280" height="458.988" fill="#8C52FF" />
          <path d="M1280.5 25.5092C1082.48 0.584789 424.033 0.584789 0 52.0952V0.584789H1280.5V25.5092Z" fill="#0E0C12" className='footer'  />
        </svg>

        <div className='main-content' >
          <div className='footer-section' >
            <div className="cond">
              <div className='footer-content'>Kontent Media is the best solution for your startup business</div>
              <div className='media'>
                <img src={linkedin} alt="bg" />
                <img src={linkedin} alt="bg" />
                <img src={linkedin} alt="bg" />
              </div>
            </div>
            <div className='btns-section'>
              <a href="#" class="button2">Email Now</a>
              <a href="#" class="button2">What'sapp Now</a>
              <div className='link-sect'>
                <div className='text2'>
                  Home
                </div>
                <div className='text2'>
                  Testmonials
                </div>
                <div className='text2'>
                  Our Services
                </div>
              </div>

            </div>

          </div>

          <hr />
          <div className='lowfoot'>
            <div className='leftsect'>
              <div className='text1'>
                Terms & Conditions
              </div>
              <div className='text1'>
                Privacy Policy
              </div>
            </div>
            <div className='rightsect'>
              <div className='text1'>
                © Copyright 2022, All Rights Reserved
              </div>
            </div>


          </div>
        </div>

      </div>



      {/* </div> */}

    </div>

  );
}

export default App;
