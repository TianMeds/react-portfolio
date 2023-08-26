import { Link } from 'react-router-dom'
import { runIntroAnimation } from '../scripts/IntroAnimation';
import { runMenuAnimation } from '../scripts/MenuAnimation';
import { runCursorAnimation } from '../scripts/CursorAnimation';
import { runCursorCertificateAnimation } from '../scripts/CursorCertificate';
import { useEffect } from 'react';
import CallIcon from '@mui/icons-material/Call';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



export default function About() {

  useEffect(() => {
    runIntroAnimation();
    runMenuAnimation();
    runCursorAnimation()
    runCursorCertificateAnimation();
  }, []);


  return (
    <div className="wrapper">

      <div className="intro">
        <h1 className="logo-header">
          <span className="logo1">About</span><span className="logo1">&nbsp;Me</span>
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
            <Link to="/about" className="menu__item-link" onClick={() => window.location.reload()} >About</Link>
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
        <div className="row">
          <div className="whitespace"></div>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/1stSlider.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/2ndSlider.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/7thSlider%20(1).jpg" alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/4thSlider.jpg" alt="Fourth slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/5thSlider.jpg" alt="Fifht slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/6th-Slider%20(1).jpg" alt="Sixth slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <br /><br />

          <div className="row">
            <div className="col-lg-12">
              <h3 className="wow fadeInUp" data-wow-delay="1.2s">about me.</h3><br />

              <p className="wow fadeInUp">Hi, My Name Is Christian B. Medallada. Most People Call Me    Tian Or Meds. I'm Currently 20 Years Old And Living In Makati City, Philippines.
                I'm currently pursuing a Bachelor of Science in Information
                Technology. I work on a variety of projects such as websites,
                web apps, UI/UX design, web and graphic design, video creation,
                and coding lessons. have been working on so many projects that
                would eventually make me a better software developer.</p>

              <p className="wow fadeInUp" data-wow-delay="0.2s">When I'm not writing code, I enjoy editing and learning about emerging technologies, travelling and learning managing money. I share the things I've learned through short videos or on my blog.</p>

            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-lg-12">
              <h3 className="wow fadeInUp" data-wow-delay="1.2s">tech stack.</h3><br />
              <div className="scroll-container">
                <div className="scroll-content">
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/React.png" alt="" />
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/TypeScript.png" alt="" />
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/HTML.png" alt="" />
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/Git.png" alt="" />
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/CSS.png" alt="" />
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/Github.png" alt="" />
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/JavaScript.png" alt="" />
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/PHP.png" alt="" />
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/Python.png" alt="" />
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/mySQL.png" alt="" />
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/Figma.png" alt="" />
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/Google-Script.png" alt="" />
                  <img width="200" height="160" src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/Notion.png" alt="" />
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alter-whitespace"></div>

      <div className="container" data-aos="fade-up">
        <h3 className="wow fadeInUp" data-wow-delay="1.2s" id="blog">blog post.</h3><br />

        <div className="card-deck  d-flex align-items-center justify-content-center">
          <div className="card text-white bg-dark mb-3" style={{width: "18rem"}}>
            <br />
            <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/pexels-lukas-574070.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Top 5 Websites to learn Programming</h5>
              <p className="card-text">Published on April 22, 2022</p>
              <a href="https://medium.com/@TianMeds/5-best-website-to-learn-programming-29d4e5d23b59" id="blog-btn"><h4 className="wow fadeInUp" data-wow-delay="0.2s">read blog <ArrowRightAltIcon/></h4></a>
            </div>
          </div>

          <div className="card text-white bg-dark mb-3" style={{width: "18rem"}}>
            <br />
            <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/pexels-luis-gomes-546819.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Top 5 Websites to get icon for web design</h5>
              <p className="card-text">Published on April 18, 2022</p>
              <a href="https://medium.com/@TianMeds/top-5-website-to-get-icons-for-designing-f049c4140fb4" id="blog-btn"><h4 className="wow fadeInUp" data-wow-delay="0.2s">read blog <ArrowRightAltIcon/> </h4></a>
            </div>
          </div>

          <div className="card text-white bg-dark mb-3" style={{width: "18rem"}}>
            <br />
            <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/pexels-photo-4590385.jpeg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">My Roadmap to become a Full stack developer</h5>
                <p className="card-text">Published on April 08, 2023</p>
              <a href="https://medium.com/@TianMeds/my-detailed-roadmap-to-become-full-stack-engineer-2023-92be82115220" id="blog-btn"><h4 className="wow fadeInUp" data-wow-delay="0.2s">read blog <ArrowRightAltIcon/></h4></a>
              </div>
          </div>
        </div>
      </div>

      <div className="container" data-aos="fade-up">
          <div className="row marginRow" >
              <h3 className="wow fadeInUp service" data-wow-delay="1.2s">services.</h3>
                <div className="alter-whitespace"></div>
                    <div className="col-md-4" >
                        <div className="box-services" >
                            <span>Web Design / Development</span>                      
                            <p>A good idea can only be born out of a good imagination an eye for detail and crafting pixel perfect websites are our strengths. I'm most excited about creating useful user experiences and driving users towards desired actions. Designing and developing high quality Web Applications, Websites, Landing Pages and Apps is a huge part of my daily life.</p>
                        </div>
                    </div>
                    <div className="col-md-4" >
                        <div className="box-services" >
                            <span>Graphic Design</span>                   
                            <p>Working and studies keep you busy? Don't have time to edit photos, videos, or graphical representations? Allow me to manage the idea and edit it to the highest quality for you. I can edit photos and videos, as well as create graphics. I can also build mockup designs to help your company's productivity. </p>
                        </div>
                    </div>
                    <div className="col-md-4" >
                        <div className="box-services" >
                            <span>Computer Support</span>                     
                            <p>You don't have time to build a computer, and you're experiencing trouble with some of your computer's problems? Allow me to assist you with computer construction, repair, and installation. And any other desktop or laptop issues. I have four years of experience, no bachelor's degree in computer assistance, but I have learnt a lot from school and the internet.</p>
                        </div>
                    </div>                         
            </div>
      </div>

      <div className="alter-whitespace"></div>

      <div className="container" data-aos="fade-up">
        <h3 className="wow fadeInUp service" data-wow-delay="1.2s">experience.</h3>
        <br /><br />
          <table className="table table-borderless table-responsive">
            <tbody>
              <tr>
                <td className="col-md-4">Asia Pacific College</td>
                <td className="col-md-4">College Undegraduate</td>
                <td className="col-md-4">August 21 - Present</td>
              </tr>
              <tr>
                <td className="col-md-4">Adamson University</td>
                <td className="col-md-4">Senior High School</td>
                <td className="col-md-4">August 2019 - July 2021</td>
              </tr>
              <tr>
                <td className="col-md-4">PCWHS - STE Program</td>
                <td className="col-md-4">Junior High School</td>
                <td className="col-md-4">June 2015 - April 2019</td>
              </tr>
            </tbody>
          </table>
      </div>

        <div className="alter-whitespace"></div>

        <div className="container" data-aos="fade-up">
        <h3 className="wow fadeInUp service" data-wow-delay="1.2s">award & certificate.</h3>
        <br /><br />


        <div className="cursors"></div>
        <div className="cursor-followers"></div>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="award-head">
                <th className="award-head-first">awards</th>
                <th>platform</th>
                <th>project</th>
              </tr>
            </thead>
            <tbody>
              <tr className="award-body">
                <td><a href="https://drive.google.com/file/d/1DhicQM2jZd2WeomvOMZMK98oLUVpp1uo/view" target="_blank" className="cert" rel="noopener noreferrer">Alibaba Cloud Certification</a></td>
                <td><a href="https://drive.google.com/file/d/1DhicQM2jZd2WeomvOMZMK98oLUVpp1uo/view" target="_blank" className="cert" rel="noopener noreferrer">Alibaba Cloud</a></td>
                <td><a href="https://drive.google.com/file/d/1DhicQM2jZd2WeomvOMZMK98oLUVpp1uo/view" target="_blank" className="cert" rel="noopener noreferrer">Alibaba Cloud Certified Associate</a></td>
              </tr>
              <tr className="award-body">
                <td><a href="https://drive.google.com/file/d/12sRQPLVk2HzIqNvjrRDSi7vtNxudvNEI/view" target="_blank" className="cert" rel="noopener noreferrer">Professional Certificate </a></td>
                <td><a href="https://drive.google.com/file/d/12sRQPLVk2HzIqNvjrRDSi7vtNxudvNEI/view" target="_blank" className="cert" rel="noopener noreferrer">CertiProf</a></td>
                <td><a href="https://drive.google.com/file/d/12sRQPLVk2HzIqNvjrRDSi7vtNxudvNEI/view" target="_blank" className="cert" rel="noopener noreferrer">Scrum Foundation Professional Certificate</a></td>
              </tr>
              <tr className="award-body">
                <td><a href="https://www.designrush.com/agency/profile/christian-medallada" target="_blank" className="cert" rel="noopener noreferrer">Best Design Awards </a></td>
                <td><a href="https://www.designrush.com/agency/profile/christian-medallada" target="_blank" className="cert" rel="noopener noreferrer">DesignRush</a></td>
                <td><a href="https://www.designrush.com/agency/profile/christian-medallada" target="_blank" className="cert" rel="noopener noreferrer">The Best Black and White Web Designs</a></td>
              </tr>
              <tr className="award-body">
                <td><a href="https://www.freecodecamp.org/certification/TianMeds/responsive-web-design" target="_blank" className="cert" rel="noopener noreferrer">Developer Certificate</a></td>
                <td><a href="https://www.freecodecamp.org/certification/TianMeds/responsive-web-design" target="_blank" className="cert" rel="noopener noreferrer">FreeCodeCamp</a></td>
                <td><a href="https://www.freecodecamp.org/certification/TianMeds/responsive-web-design" target="_blank" className="cert" rel="noopener noreferrer">Responsive Web Design</a></td>
              </tr>
              <tr className="award-body">
                <td><a href="https://drive.google.com/file/d/1yb7aV52e9lT-Mzwdbm0Tj71bv79jQm0A/view" target="_blank" className="cert" rel="noopener noreferrer">Alibaba Cloud Certification</a></td>
                <td><a href="https://drive.google.com/file/d/1yb7aV52e9lT-Mzwdbm0Tj71bv79jQm0A/view" target="_blank" className="cert" rel="noopener noreferrer">Alibaba Cloud Academy</a></td>
                <td><a href="https://drive.google.com/file/d/1yb7aV52e9lT-Mzwdbm0Tj71bv79jQm0A/view" target="_blank" className="cert" rel="noopener noreferrer">Operate and Manage a Cloud Server</a></td>
              </tr>
              <tr className="award-body">
                <td><a href="https://www.linkedin.com/learning/certificates/03f7dc6adfea1bb1b68d3de61e076d0fe3cd3ff9c8a26827b16ae679d3311a99?u=35279340" target="_blank" className="cert" rel="noopener noreferrer">DATAMA1 Completion</a></td>
                <td><a href="https://www.linkedin.com/learning/certificates/03f7dc6adfea1bb1b68d3de61e076d0fe3cd3ff9c8a26827b16ae679d3311a99?u=35279340" target="_blank" className="cert" rel="noopener noreferrer">Linkedln</a></td>
                <td><a href="https://www.linkedin.com/learning/certificates/03f7dc6adfea1bb1b68d3de61e076d0fe3cd3ff9c8a26827b16ae679d3311a99?u=35279340" target="_blank" className="cert" rel="noopener noreferrer">Relational Databases Essential Training</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <br /><br />
        <Link to='/award' id='view'>View More</Link>

        <div className="whitespace"></div>

     
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
    </div>
  )
}
