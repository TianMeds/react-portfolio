import { Link } from 'react-router-dom'
import { runIntroAnimation } from '../scripts/IntroAnimation';
import { runMenuAnimation } from '../scripts/MenuAnimation';
import { runCursorAnimation } from '../scripts/CursorAnimation';
import { runCursorCertificateAnimation } from '../scripts/CursorCertificate';
import { useEffect, useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import { validateForm} from '../scripts/formValidation';
import axios from 'axios'


export default function Contact() {

      
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [service, setService] = useState('');
      const [message, setMessage] = useState('');
      const [error, setError] = useState<string | null>(null);
      const [errorMessage, setErrorMessage] = useState<boolean>(false);
      

      function validEmail(email: string): boolean {
            const symbol = /\S+@\S+\.\S+/;
            return symbol.test(email);
          }

      const handleSubmit = () => {
           if (name.length < 1){
            setError("Name cannot be blank");
            setErrorMessage(true);
           }
           else if (!validEmail(email)){
            setError('Invalid Email Address');
            setErrorMessage(true)
           }
           else if(!service){
            setError("Please choose one")
            setErrorMessage(true)
           }
           else if(message.length < 1){
            setError("Please enter a message")
            setErrorMessage(true)
           }
           else{
            const url = 'http://localhost/test/database.php';
            let fData = new FormData();
            fData.append('name', name);
            fData.append('email', email);
            fData.append('service', service);
            fData.append('message', message);
            axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
           }
      }

      useEffect(() => {
            runIntroAnimation();
            runMenuAnimation();
            runCursorAnimation();
            runCursorCertificateAnimation();

          }, []);
        
  return (
    <div className="wrapper">

            <div className="intro">
                  <h1 className="logo-header">
                    <span className="logo1">Contact</span><span className="logo1">&nbsp;Me</span>
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
            <Link to="/contact" className="menu__item-link" onClick={() => window.location.reload()}>Contact</Link>
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
                  <div className="col-lg-8">
                      <h3 className="wow fadeInUp" data-wow-delay="1s">Get in touch — let’s <br/>work together. </h3><br/>
                      <p className="wow fadeInUp" data-wow-delay="1.2s">I provide high-quality website and app development services at reasonable pricing. I am skilled and well-trained to create outstanding websites and apps that will assist you in meeting your company objectives.</p>
                  </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
                  <div className="row">
                        <div className="col-lg-8">
                              <form name="contact-form" id="contact-form" className="gform pure-form pure-form-stacked"  method="POST"  data-email="medalladachris100@gmail.com"
                               action='http://localhost/test/database.php'
                               onSubmit={handleSubmit}
                              >

                              <ul>

                              <li className="wow fadeInUp" data-wow-delay="1.4s">
                                    <div className="textarea">
                                          <label htmlFor="name">Name:</label>
                                          <input type="text" name="name" id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <small className="error"></small>
                              </li>

                              <li className="wow fadeInUp" data-wow-delay="1.6s">
                                    <div className="textarea">
                                          <label htmlFor="email">Email:</label>
                                          <input type="text" name="email" id="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <small className="error"></small>
                                    
                              </li>
                              <li className="wow fadeInUp" data-wow-delay="1.6s">
                                    <label htmlFor="dropdown" style={{width: '100px'}}>Services</label>
                                          <br/>
                                          <select id="dropdown" name="service" value={service} onChange={(e) => setService(e.target.value)}>
                                                <option value="" disabled selected hidden>What are you interested in?</option>
                                                <option>UI/UX Web & Mobile Design</option>
                                                <option>Web & Mobile App Development</option>
                                                <option>Graphic Design</option>
                                                <option>IT Solution</option>
                                          </select>
                                    
                              </li>
                              


                              <li className="wow fadeInUp" data-wow-delay="1.6s">
                                    <div className="textarea">
                                          <label htmlFor="message" >Message:</label>
                                          <textarea id="message" name="message" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>
                                    <small className="error"></small>
                              </li>

                              </ul>

                              <input type="submit" id="send" value="Send Message"/> 
                              <p id="success"></p>

                              </form>
                        </div>
                  </div>
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
