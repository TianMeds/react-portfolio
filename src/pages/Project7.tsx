import { Link } from 'react-router-dom'
import { runIntroAnimation } from '../scripts/IntroAnimation';
import { runMenuAnimation } from '../scripts/MenuAnimation';
import { runCursorAnimation } from '../scripts/CursorAnimation';
import { runCursorCertificateAnimation } from '../scripts/CursorCertificate';
import { runScrollAnimation } from "../scripts/ScrollAnimation";
import { useEffect } from 'react';
import CallIcon from '@mui/icons-material/Call';

export default function Project7() {
    useEffect(() => {
        runIntroAnimation();
        runMenuAnimation();
        runCursorAnimation()
        runCursorCertificateAnimation();
        runScrollAnimation();   
      }, []);

  return (
     <div className="wrapper">

            <div className="intro">
                  <h1 className="logo-header">
                    <span className="logo1">Project</span><span className="logo1">&nbsp;Incoming...</span>
                  </h1>
            </div>

      <div className="menu-open">menu</div>
      <div className="nav-container">
        <div className="menu-close">close</div>
        <div className="socials">
          <Link to="https://tinyurl.com/38u9r4d7" target="_blank">
            <span>facebook</span>
          </Link>
          <Link to="https://tinyurl.com/38bv8ths" target="_blank">
            <span>instagram</span>
          </Link>
          <Link to="https://tinyurl.com/mv3vjvmt" target="_blank">
            <span>github</span>
          </Link>
          <Link to="https://tinyurl.com/498hj8b4" target="_blank">
            <span>linkedin</span>
          </Link>
        </div>
        <nav className="menu">
          <div className="menu__item">
            <Link to="/" className="menu__item-link">Home</Link>
            <img className="menu__item-img" alt="" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/HomeScreen.png" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>Home - Home - Home - Home - Home - Home - Home</span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <Link to="/work" className="menu__item-link">Work</Link>
            <img className="menu__item-img" alt="" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2023-08-22_111356371.png" />
            <div className="marquee">
              <div className="marquee__inner">
                <span
                >Work - Work - Work - Work - Work - Work
                  - Work</span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <Link to="/about" className="menu__item-link">About</Link>
            <img className="menu__item-img" alt="" src='https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2023-08-22_111423483.png' />
            <div className="marquee">
              <div className="marquee__inner">
                <span>About - About - About - About - About - About - About</span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <Link to="/contact" className="menu__item-link">Contact</Link>
            <img className="menu__item-img" alt="" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2023-08-22_111455067.png" />
            <div className="marquee">
              <div className="marquee__inner">
                <span
                >Contact - Contact - Contact - Contact - Contact - Contact -
                  Contact</span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="whitespace"></div>

<div className="container">
      <div className="hero-content">
            <br/><br/>
            <div className="row">
                  <div className="col-lg-12">
                        <br/>

                        <h1 className="wow fadeInUp" data-wow-delay="1s">Discord Bot</h1>
                        
                        <div className="wow fadeInUp project-link" data-wow-delay="1.1s">
                              <a href="https://tianmeds.github.io/DiscordWebsite/">Project Access here</a>
                        </div>

                        <br/>
                        <div className="wow fadeInUp project-back" data-wow-delay="1.1s" >
                        <Link to='/work' className='previous round'>&#8249;</Link>
                        </div>

                        <div className="whitespace"></div>

                        <div className="row">
                              <div className="col-lg-4">
                                    <p className="wow fadeInUp" data-wow-delay="1.2s">service :</p>
                                    <h6 className="wow fadeInUp" data-wow-delay="1.3s">Web Development & Software Development</h6>
                              </div>

                              <div className="col-lg-4">
                                    <p className="wow fadeInUp" data-wow-delay="1.4s">started :</p>
                                    <h6 className="wow fadeInUp" data-wow-delay="1.5s">20 March 2022</h6>
                              </div>

                              <div className="col-lg-4">
                                    <p className="wow fadeInUp" data-wow-delay="1.6s">completed :</p>
                                    <h6 className="wow fadeInUp" data-wow-delay="1.7s">26 March 2022</h6>
                              </div>
                        </div>
                        <br/>
                        <p className="wow fadeInUp" data-wow-delay="1.8s">My project for the Online Replit Hackathon was the Discord Bot. This is done using the Python language and Procfile, and it will run continuously for 24 hours.</p>
                  </div>
            </div>
      </div>
</div>

<div className="project-img">
      <div className="container">
            <br/><br/>
            <div className="row">
                  <div className="wow fadeInUp image_div" id="SecondWeb" data-wow-delay="1.9s" >
                    <div className="box">
                        <img src = "https://bit.ly/3yfkz2u" alt=''/>
                    </div>
                    <div className="box">
                        <img src = "https://bit.ly/3MjIaFb" alt=''/>
                    </div>
                  </div>
            </div>
      </div>
</div>


<br/><br/>

      <div className="footer">
            <div className="container">
                  <br/><br/>

                  <div className="collab">
                        <div className="row">
                              <div className="col-lg-12">
                                    <p className="wow fadeInUp">Do you have an interesting project? I can assist you.</p>
                              </div>
                        </div>
                  </div>

                  <br/>

                  <div className="hr">
                        <div className="row"></div>
                  </div>

                  <br/><br/>

                  <div className="info">
                        <div className="row">
                              <div className="col-lg-4" id="personal">
                                    <p className="wow fadeInUp">connect with me</p>
                                    <a href="tel:+639951617400"><h4 className="wow fadeInUp" data-wow-delay="0.2s"><CallIcon/> +63 945 2395 356</h4></a>
                                    <br/><br/>
                              </div>

                              <div className="col-lg-4" id="media">
                                    <p className="wow fadeInUp" data-wow-delay="0s">follow me</p>

                                    <ul>
                                          <li id="fb" className="wow fadeInUp" data-wow-delay="0.4s">
                                          <a href="https://tinyurl.com/38u9r4d7" target="_blank" rel="noopener noreferrer">
                                          facebook
                                          </a>
                                          </li>
                                          <li id="ig" className="wow fadeInUp" data-wow-delay="0.6s">
                                          <a href="https://tinyurl.com/38bv8ths" target="_blank" rel="noopener noreferrer">
                                          instagram
                                          </a>
                                          </li>
                                          <li id="gh" className="wow fadeInUp" data-wow-delay="0.8s">
                                          <a href="https://tinyurl.com/mv3vjvmt" target="_blank" rel="noopener noreferrer">
                                          github
                                          </a>
                                          </li>
                                          <li id="ln" className="wow fadeInUp" data-wow-delay="1s">
                                          <a href="https://tinyurl.com/498hj8b4" target="_blank" rel="noopener noreferrer">
                                          linkedin
                                          </a>
                                          </li>
                                    </ul>

                                    <br/><br/>
                              </div>

                              <div className="col-lg-4" id="address">
                                    <p className="wow fadeInUp" data-wow-delay="0s">say hello</p>
                                    <a href="mailto:medalladachris100@gmail.com"><h4 className="wow fadeInUp" data-wow-delay="0.2s">medalladachris100@gmail.com</h4></a>
                                    <br/><br/>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
      <br/><br/><br/><br/>
    </div>
  )
}
