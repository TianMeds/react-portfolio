import { Link } from 'react-router-dom'
import { runIntroAnimation } from '../scripts/IntroAnimation';
import { runMenuAnimation } from '../scripts/MenuAnimation';
import { runCursorAnimation } from '../scripts/CursorAnimation';
import { runCursorCertificateAnimation } from '../scripts/CursorCertificate';
import { useEffect } from 'react';
import CallIcon from '@mui/icons-material/Call';

export default function Work() {
  
  useEffect(() => {
    runIntroAnimation();
    runMenuAnimation();
    runCursorAnimation()
    runCursorCertificateAnimation();
  }, []);

  const handleProjectClick = (projectUrl: string) => {
    window.location.href = projectUrl;
  };

  return (
    <div className="project-wrapper">

            <div className="intro">
                  <h1 className="logo-header">
                    <span className="logo1">My</span><span className="logo1">&nbsp;Project</span>
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
            <Link to="/work" className="menu__item-link" onClick={() => window.location.reload()}>Work</Link>
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

      <div className="container">
        <div className="hero-content">
              <br/><br/>
                <div className="row">
                    <div className="col-lg-8">
                        <h3 className="wow fadeInUp" data-wow-delay="1s">work.</h3><br/>
                        <p className="wow fadeInUp" data-wow-delay="1.2s">These are all the projects I've developed and built throughout the years as I've learned new technologies. After accomplishing my aim of becoming a Software Engineer, I crafted, made, and refined my talents on these projects. You can read the descriptions of each project to get an idea of what they are. You are welcome to fork and clone it on your GitHub account to play with it for free.</p>
                    </div>
                </div>
          </div>
        </div>


        <div className="container-fluid" data-aos="fade-up">

          <div className="whitespace"></div>
          <div className="whitespace"></div>


          <div className="cursor"></div>
          <div className="cursor-follower"></div>

          <div className="row" data-aos="fade-up">
                <div className="col-lg-8"></div>

                <div className="col-lg-4 project project1 wow fadeInUp" data-wow-delay="1.4s" onClick={() => handleProjectClick('/project1')}></div>
          </div>

          <div className="whitespace"></div>

          <div className="row" data-aos="fade-up"> 
                <div className="col-lg-6 project project2 wow fadeInUp" onClick={() => handleProjectClick('/project2')}></div>

                <div className="col-lg-6"></div>
          </div>

          <div className="whitespace"></div>

          <div className="row" data-aos="fade-up">
                <div className="col-lg-7"></div>

                <div className="col-lg-4 project project3 wow fadeInUp" onClick={() => handleProjectClick('/project3')}></div>

                <div className="col-lg-1"></div>
          </div>

          <div className="whitespace"></div>

          <div className="row" data-aos="fade-up">
                <div className="col-lg-1"></div>

                <div className="col-lg-5 project project4 wow fadeInUp" onClick={() => handleProjectClick('/project4')}></div>

                <div className="col-lg-6"></div>
          </div>

          <div className="whitespace"></div>

          <div className="row" data-aos="fade-up">
                <div className="col-lg-8"></div>

                <div className="col-lg-4 project project5 wow fadeInUp" onClick={() => handleProjectClick('/project5')}></div>
          </div>

          <div className="whitespace"></div>

          <div className="row" data-aos="fade-up">
                <div className="col-lg-6 project project6 wow fadeInUp" onClick={() => handleProjectClick('/project6')}></div>

                <div className="col-lg-6"></div>
          </div>

          <div className="whitespace"></div>

          <div className="row" data-aos="fade-up">
                <div className="col-lg-7"></div>

                <div className="col-lg-4 project project7 wow fadeInUp" onClick={() => handleProjectClick('/project7')}></div>

                <div className="col-lg-1"></div>
          </div>

          <div className="whitespace"></div>

          <div className="row" data-aos="fade-up">
                <div className="col-lg-1"></div>

                <div className="col-lg-5 project project8 wow fadeInUp" onClick={() => handleProjectClick('/project8')}></div>

                <div className="col-lg-6"></div>
          </div>

          <div className="whitespace"></div>

          <div className="row" data-aos="fade-up">
                <div className="col-lg-8"></div>

                <div className="col-lg-4 project project9 wow fadeInUp" data-wow-delay="1.4s" onClick={() => handleProjectClick('/project9')}></div>
          </div>

          <div className="whitespace"></div>

          <div className="row" data-aos="fade-up"> 
                <div className="col-lg-6 project project10 wow fadeInUp" onClick={() => handleProjectClick('/project10')}></div>

                <div className="col-lg-6"></div>
          </div>

          <div className="whitespace"></div>

          <div className="whitespace"></div>

          <div className="row" data-aos="fade-up">
                <div className="col-lg-7"></div>

                <div className="col-lg-4 project project11 wow fadeInUp" onClick={() => handleProjectClick('/project11')}></div>

                <div className="col-lg-1"></div>
          </div>

          <div className="whitespace"></div>

          <div className="row" data-aos="fade-up"> 
                <div className="col-lg-6 project project12 wow fadeInUp" onClick={() => handleProjectClick('/project12')}></div>

                <div className="col-lg-6"></div>
          </div>

          <div className="row" data-aos="fade-up">
                <div className="col-lg-7"></div>

                <div className="col-lg-4 project project13 wow fadeInUp" onClick={() => handleProjectClick('/project13')}></div>

                <div className="col-lg-1"></div>
          </div>

          <div className="whitespace"></div>

          <div className="whitespace"></div>

          </div>



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
