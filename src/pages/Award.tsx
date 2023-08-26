import { Link } from 'react-router-dom'
import { runIntroAnimation } from '../scripts/IntroAnimation';
import { runMenuAnimation } from '../scripts/MenuAnimation';
import { runCursorAnimation } from '../scripts/CursorAnimation';
import { runCursorCertificateAnimation } from '../scripts/CursorCertificate';
import { useEffect } from 'react';
import CallIcon from '@mui/icons-material/Call';

export default function Award() {

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
                    <span className="logo1">Awards &</span><span className="logo1">&nbsp;Certificate</span>
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
            <Link to="/contact" style={{ color: 'black' }} className="menu__item-link">Contact</Link>
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

      <div className="alter-whitespace"></div>

<div className="container" data-aos="fade-up">
    <h3 className="wow fadeInUp service" data-wow-delay="1.2s">all award & certificate.</h3>    
    <br/><br/>  

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
                <td><a href="https://drive.google.com/file/d/1DhicQM2jZd2WeomvOMZMK98oLUVpp1uo/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud Certification</a></td>
                <td><a href="https://drive.google.com/file/d/1DhicQM2jZd2WeomvOMZMK98oLUVpp1uo/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud</a></td>
                <td><a href="https://drive.google.com/file/d/1DhicQM2jZd2WeomvOMZMK98oLUVpp1uo/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud Certified Associate</a></td>
          </tr>
          <tr className="award-body">
                <td><a href="https://drive.google.com/file/d/1yb7aV52e9lT-Mzwdbm0Tj71bv79jQm0A/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud Certification</a></td>
                <td><a href="https://drive.google.com/file/d/1yb7aV52e9lT-Mzwdbm0Tj71bv79jQm0A/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud Academy</a></td>
                <td><a href="https://drive.google.com/file/d/1yb7aV52e9lT-Mzwdbm0Tj71bv79jQm0A/view" target="_blank"  className="cert" rel='noopener noreferrer'>Operate and Manage a Cloud Server</a></td>
          </tr>
          <tr className="award-body">
                <td><a href="https://drive.google.com/file/d/1QBx_Jrc4WFZVE8G-sQ0qYZY1hxbJGod9/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud Certification</a></td>
                <td><a href="https://drive.google.com/file/d/1QBx_Jrc4WFZVE8G-sQ0qYZY1hxbJGod9/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud Academy</a></td>
                <td><a href="https://drive.google.com/file/d/1QBx_Jrc4WFZVE8G-sQ0qYZY1hxbJGod9/view" target="_blank"  className="cert" rel='noopener noreferrer'>Handle Large Traffic with Load Balancer</a></td>
          </tr>
          <tr className="award-body">
                <td><a href="https://drive.google.com/file/d/1-78-53Fndhzv4J9fyIZt4SSFMk1CZfMG/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud Certification</a></td>
                <td><a href="https://drive.google.com/file/d/1-78-53Fndhzv4J9fyIZt4SSFMk1CZfMG/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud Academy</a></td>
                <td><a href="https://drive.google.com/file/d/1-78-53Fndhzv4J9fyIZt4SSFMk1CZfMG/view" target="_blank"  className="cert" rel='noopener noreferrer'>Operate and Manage a RDB on the Cloud</a></td>
          </tr>
          <tr className="award-body">
                <td><a href="https://drive.google.com/file/d/1KJagr63Mp8DZf2Awe2SwWyzIR22bhGpK/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud Certification</a></td>
                <td><a href="https://drive.google.com/file/d/1KJagr63Mp8DZf2Awe2SwWyzIR22bhGpK/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud Academy</a></td>
                <td><a href="https://drive.google.com/file/d/1KJagr63Mp8DZf2Awe2SwWyzIR22bhGpK/view" target="_blank"  className="cert" rel='noopener noreferrer'>Use Cloud Resources Flexibly According to Business Requirement</a></td>
          </tr>
          <tr className="award-body">
                <td><a href="https://drive.google.com/file/d/18F6gwIfdW57Ma9B17ASW5fHt6B56i32o/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud Certification</a></td>
                <td><a href="https://drive.google.com/file/d/18F6gwIfdW57Ma9B17ASW5fHt6B56i32o/view" target="_blank" className="cert" rel='noopener noreferrer'>Alibaba Cloud Academy</a></td>
                <td><a href="https://drive.google.com/file/d/18F6gwIfdW57Ma9B17ASW5fHt6B56i32o/view" target="_blank" className="cert" rel='noopener noreferrer'>Operate and Manage Object Storage on the Cloud</a></td>
          </tr>
          <tr className="award-body">
                <td><a href="https://www.freecodecamp.org/certification/TianMeds/javascript-algorithms-and-data-structures" target="_blank" className="cert" rel='noopener noreferrer'>Developer Certification</a></td>
                <td><a href="https://www.freecodecamp.org/certification/TianMeds/javascript-algorithms-and-data-structures" target="_blank" className="cert" rel='noopener noreferrer'>FreeCodeCamp</a></td>
                <td><a href="https://www.freecodecamp.org/certification/TianMeds/javascript-algorithms-and-data-structures" target="_blank"  className="cert" rel='noopener noreferrer'>JavaScript Algorithm and Data Structure</a></td>
          </tr>
          <tr className="award-body">
                <td><a href="https://www.freecodecamp.org/certification/TianMeds/front-end-development-libraries" target="_blank" className="cert" rel='noopener noreferrer'>Developer Certification</a></td>
                <td><a href="https://www.freecodecamp.org/certification/TianMeds/front-end-development-libraries" target="_blank" className="cert" rel='noopener noreferrer'>FreeCodeCamp</a></td>
                <td><a href="https://www.freecodecamp.org/certification/TianMeds/front-end-development-libraries" target="_blank"  className="cert" rel='noopener noreferrer'>Front End Development Libraries</a></td>
          </tr> 
          <tr className="award-body">
          <td><a href="https://www.designrush.com/best-designs" target="_blank" className="cert" rel='noopener noreferrer'>Professional Certificate </a></td>
          <td><a href="https://www.designrush.com/best-designs" target="_blank"  className="cert" rel='noopener noreferrer'>CertiProf</a></td>
          <td><a href="https://www.designrush.com/best-designs" target="_blank" className="cert" rel='noopener noreferrer'>Scrum Foundation Professional Certificate</a></td>
          </tr>  
    <tr className="award-body">
  <td><a href="https://www.designrush.com/best-designs" target="_blank" className="cert" rel='noopener noreferrer'>Best Design Awards </a></td>
  <td><a href="https://www.designrush.com/best-designs" target="_blank"  className="cert" rel='noopener noreferrer'>DesignRush</a></td>
  <td><a href="https://www.designrush.com/best-designs" target="_blank" className="cert" rel='noopener noreferrer'>The Best Black and White Web Designs</a></td>
    </tr>    
    <tr className="award-body">
  <td><a href="https://www.freecodecamp.org/certification/TianMeds/responsive-web-design" target="_blank" className="cert" rel='noopener noreferrer'>Developer Certificate</a></td>
  <td><a href="https://www.freecodecamp.org/certification/TianMeds/responsive-web-design" target="_blank"  className="cert" rel='noopener noreferrer'>FreeCodeCamp</a></td>
  <td><a href="https://www.freecodecamp.org/certification/TianMeds/responsive-web-design" target="_blank"className="cert" rel='noopener noreferrer'>Responsive Web Design</a></td>
    </tr>
    <tr className="award-body">
  <td><a href="https://www.linkedin.com/learning/certificates/a84865577bb6b53c7d99f064a8784be65f340efa2348d7d2a03e75352382e094?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Course Completion</a></td>
  <td><a href="https://www.linkedin.com/learning/certificates/a84865577bb6b53c7d99f064a8784be65f340efa2348d7d2a03e75352382e094?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
  <td><a href="https://www.linkedin.com/learning/certificates/a84865577bb6b53c7d99f064a8784be65f340efa2348d7d2a03e75352382e094?u=35279340" target="_blank"  className="cert" rel='noopener noreferrer'>Data Structure: Trees</a></td>
    </tr>
    <tr className="award-body">
          <td><a href="https://drive.google.com/file/d/1QqHj7EppO-BVTCgnSX7kEzCw-l7i6sOU/view" target="_blank" className="cert" rel='noopener noreferrer'>Course Completion</a></td>
          <td><a href="https://drive.google.com/file/d/1QqHj7EppO-BVTCgnSX7kEzCw-l7i6sOU/view" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
  <td><a href="https://drive.google.com/file/d/1QqHj7EppO-BVTCgnSX7kEzCw-l7i6sOU/view" target="_blank" className="cert" rel='noopener noreferrer'>Flowcharts</a></td>
    </tr>
    <tr className="award-body">
  <td><a href="https://drive.google.com/file/d/1jMGiBdSzM73B6a2Y-TNU-KkZRmTwplPl/view" target="_blank" className="cert" rel='noopener noreferrer'>Compeletion Certificate</a></td>
  <td><a href="https://drive.google.com/file/d/1jMGiBdSzM73B6a2Y-TNU-KkZRmTwplPl/view" target="_blank" className="cert" rel='noopener noreferrer'>Code Combat</a></td>
  <td><a href="https://drive.google.com/file/d/1jMGiBdSzM73B6a2Y-TNU-KkZRmTwplPl/view"  target="_blank" className="cert" rel='noopener noreferrer'>Intro to CSS Basic</a></td>
    </tr>
          <tr className="award-body">
          <td><a href="https://www.linkedin.com/learning/certificates/03f7dc6adfea1bb1b68d3de61e076d0fe3cd3ff9c8a26827b16ae679d3311a99?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>DATAMA1 Completion</a></td>
          <td><a href="https://www.linkedin.com/learning/certificates/03f7dc6adfea1bb1b68d3de61e076d0fe3cd3ff9c8a26827b16ae679d3311a99?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
          <td><a href="https://www.linkedin.com/learning/certificates/03f7dc6adfea1bb1b68d3de61e076d0fe3cd3ff9c8a26827b16ae679d3311a99?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Relational Databases Essential Training</a></td>
          </tr>
          <tr className="award-body">
          <td><a href="https://www.linkedin.com/learning/certificates/8c77cd626023286477db556aeb7e0f04520250a818eca290369b89315634eae3?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>UX Foundation</a></td>
          <td><a href="https://www.linkedin.com/learning/certificates/8c77cd626023286477db556aeb7e0f04520250a818eca290369b89315634eae3?u=35279340" target="_blank"className="cert" rel='noopener noreferrer'>Linkedln</a></td>
          <td><a href="https://www.linkedin.com/learning/certificates/8c77cd626023286477db556aeb7e0f04520250a818eca290369b89315634eae3?u=35279340"  target="_blank" className="cert" rel='noopener noreferrer'>Prototyping</a></td>
          </tr>
          <tr className="award-body">
          <td><a href="https://drive.google.com/file/d/1MG2_I_Dy7OWX6fFpk4dGenWV82FXnLaM/view" target="_blank" className="cert" rel='noopener noreferrer'>Compeletion Certificate</a></td>
  <td><a href="https://drive.google.com/file/d/1MG2_I_Dy7OWX6fFpk4dGenWV82FXnLaM/view" target="_blank" className="cert" rel='noopener noreferrer'>Hour of Code</a></td>
  <td><a href="https://drive.google.com/file/d/1MG2_I_Dy7OWX6fFpk4dGenWV82FXnLaM/view" target="_blank" className="cert" rel='noopener noreferrer'>Basic Concept of CS</a></td>
    </tr>

    <tr className="award-body">
      <td><a href="https://www.linkedin.com/learning/certificates/5d3cdb06f9af10f0dc5575e66dd47566d2e6d744f9f28d45d6fe5a33f2e9e285?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Course Completion</a></td>
      <td><a href="https://www.linkedin.com/learning/certificates/5d3cdb06f9af10f0dc5575e66dd47566d2e6d744f9f28d45d6fe5a33f2e9e285?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
      <td><a href="https://www.linkedin.com/learning/certificates/5d3cdb06f9af10f0dc5575e66dd47566d2e6d744f9f28d45d6fe5a33f2e9e285?u=35279340" target="_blank"  className="cert" rel='noopener noreferrer'>Filemaker: Relational Database Design</a></td>
    </tr>

  <tr className="award-body">
          <td><a href="https://www.linkedin.com/learning/certificates/439c31475fe98d3891d4fec9014fef835a13bb3acf32270d4310cd3fb7063cbd?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Course Completion</a></td>
          <td><a href="https://www.linkedin.com/learning/certificates/439c31475fe98d3891d4fec9014fef835a13bb3acf32270d4310cd3fb7063cbd?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
          <td><a href="https://www.linkedin.com/learning/certificates/439c31475fe98d3891d4fec9014fef835a13bb3acf32270d4310cd3fb7063cbd?u=35279340"target="_blank"  className="cert" rel='noopener noreferrer'>Android Studio Essential Training 2020</a></td>
  </tr>

  <tr className="award-body">
              <td><a href="https://www.linkedin.com/learning/certificates/aedbceb966d753b785e7a38e1e665708847a470d902843717b16dc324c2ecd7b?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Course Completion</a></td>
              <td><a href="https://www.linkedin.com/learning/certificates/aedbceb966d753b785e7a38e1e665708847a470d902843717b16dc324c2ecd7b?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
              <td><a href="https://www.linkedin.com/learning/certificates/aedbceb966d753b785e7a38e1e665708847a470d902843717b16dc324c2ecd7b?u=35279340"target="_blank" className="cert" rel='noopener noreferrer'>
                Mobile App Analytics for Developers</a></td>
  </tr>

  <tr className="award-body">
                  <td><a href="https://www.linkedin.com/learning/certificates/e23ea706144a10d2f2fd749cf311342acb03cb3626db9e1a18dd3e52bb501be1" target="_blank" className="cert" rel='noopener noreferrer'>Course Completion</a></td>
                  <td><a href="https://www.linkedin.com/learning/certificates/e23ea706144a10d2f2fd749cf311342acb03cb3626db9e1a18dd3e52bb501be1"target="_blank"className="cert" rel='noopener noreferrer'>Linkedln</a></td>
                  <td><a href="https://www.linkedin.com/learning/certificates/e23ea706144a10d2f2fd749cf311342acb03cb3626db9e1a18dd3e52bb501be1" target="_blank"  className="cert" rel='noopener noreferrer'>
                      Designing and Prototyping a Mobile App with Adobe XD</a></td>
  </tr>

  <tr className="award-body">
      <td><a href="https://www.linkedin.com/learning/certificates/227c78e5d2c8d20a67178b1a0412e513fe3b94e41664e85e4cc49f23fb6f429f?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>UX Design</a></td>
      <td><a href="https://www.linkedin.com/learning/certificates/227c78e5d2c8d20a67178b1a0412e513fe3b94e41664e85e4cc49f23fb6f429f?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
      <td><a href="https://www.linkedin.com/learning/certificates/227c78e5d2c8d20a67178b1a0412e513fe3b94e41664e85e4cc49f23fb6f429f?u=35279340" target="_blank"  className="cert" rel='noopener noreferrer'>Overview</a></td>
  </tr>

  <tr className="award-body">
      <td><a href="https://www.linkedin.com/learning/certificates/b9dcefd18832625a6413575b2f696b0f1552bd10ace1fd1c05e72300c7172586" target="_blank" className="cert" rel='noopener noreferrer'>UX Design</a></td>
      <td><a href="https://www.linkedin.com/learning/certificates/b9dcefd18832625a6413575b2f696b0f1552bd10ace1fd1c05e72300c7172586" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
      <td><a href="https://www.linkedin.com/learning/certificates/b9dcefd18832625a6413575b2f696b0f1552bd10ace1fd1c05e72300c7172586"target="_blank" className="cert" rel='noopener noreferrer'>Analyzing User Data</a></td>
  </tr>

  <tr className="award-body">
      <td><a href="https://www.linkedin.com/learning/certificates/e7479cbfab33b86ca0681f7a8c9ba32d26d2e3f7379442e42c03683a4202876a?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>UX Design</a></td>
      <td><a href="https://www.linkedin.com/learning/certificates/e7479cbfab33b86ca0681f7a8c9ba32d26d2e3f7379442e42c03683a4202876a?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
      <td><a href="https://www.linkedin.com/learning/certificates/e7479cbfab33b86ca0681f7a8c9ba32d26d2e3f7379442e42c03683a4202876a?u=35279340" target="_blank"  className="cert" rel='noopener noreferrer'>Creating Personas</a></td>
  </tr>

  <tr className="award-body">
    <td><a href="https://www.linkedin.com/learning/certificates/0b03af6f9304c0597ffb95065730a9a43cfd19b386ed9833ff60cb145015bdeb?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>UX Design</a></td>
    <td><a href="https://www.linkedin.com/learning/certificates/0b03af6f9304c0597ffb95065730a9a43cfd19b386ed9833ff60cb145015bdeb?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
    <td><a href="https://www.linkedin.com/learning/certificates/0b03af6f9304c0597ffb95065730a9a43cfd19b386ed9833ff60cb145015bdeb?u=35279340" target="_blank"  className="cert" rel='noopener noreferrer'>Ideation</a></td>
</tr>

<tr className="award-body">
    <td><a href="https://www.linkedin.com/learning/certificates/bf0d3b8a70050d1c055c4ec6cc6721b67ceea4f8057795d9eb52d1e9dd2ca792?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>UX Design</a></td>
    <td><a href="https://www.linkedin.com/learning/certificates/bf0d3b8a70050d1c055c4ec6cc6721b67ceea4f8057795d9eb52d1e9dd2ca792?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
    <td><a href="https://www.linkedin.com/learning/certificates/bf0d3b8a70050d1c055c4ec6cc6721b67ceea4f8057795d9eb52d1e9dd2ca792?u=35279340" target="_blank"  className="cert" rel='noopener noreferrer'>6 Paper Prototyping</a></td>
</tr>

<tr className="award-body">
    <td><a href="https://www.linkedin.com/learning/certificates/394e6219445c34021055f552da78886c2310e96d3648b26929ac23d68e3d475b?u=35279340" target="_blank"className="cert" rel='noopener noreferrer'>UX Design</a></td>
    <td><a href="https://www.linkedin.com/learning/certificates/394e6219445c34021055f552da78886c2310e96d3648b26929ac23d68e3d475b?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
    <td><a href="https://www.linkedin.com/learning/certificates/394e6219445c34021055f552da78886c2310e96d3648b26929ac23d68e3d475b?u=35279340" target="_blank"  className="cert" rel='noopener noreferrer'>Creating Scenarios and Storyboards</a></td>
</tr>

<tr className="award-body">
    <td><a href="https://www.linkedin.com/learning/certificates/5abc6ae829b36893f9d17d3ae3eaebf6aabbb8a36d8700023b3d5204a49e0e06?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>UX Design</a></td>
    <td><a href="https://www.linkedin.com/learning/certificates/5abc6ae829b36893f9d17d3ae3eaebf6aabbb8a36d8700023b3d5204a49e0e06?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
    <td><a href="https://www.linkedin.com/learning/certificates/5abc6ae829b36893f9d17d3ae3eaebf6aabbb8a36d8700023b3d5204a49e0e06?u=35279340" target="_blank"  className="cert" rel='noopener noreferrer'>7 Implementation Planning</a></td>
</tr>

<tr className="award-body">
    <td><a href="https://www.linkedin.com/learning/certificates/9958b1b11146216f86da6be52c4cdbc749126b4c3a909dd2c8678e40558a51b3"target="_blank" className="cert" rel='noopener noreferrer'>Course Compeletion</a></td>
    <td><a href="https://www.linkedin.com/learning/certificates/9958b1b11146216f86da6be52c4cdbc749126b4c3a909dd2c8678e40558a51b3" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
    <td><a href="https://www.linkedin.com/learning/certificates/9958b1b11146216f86da6be52c4cdbc749126b4c3a909dd2c8678e40558a51b3" target="_blank"  className="cert" rel='noopener noreferrer'>
          Python Basics for Java Developers</a></td>
</tr>

<tr className="award-body">
    <td><a href="https://www.linkedin.com/learning/certificates/407104c5cd8cf0c226af10fa87b4685c882665f2ef39c9ee1119911f225e5fc7?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Course Compeletion</a></td>
    <td><a href="https://www.linkedin.com/learning/certificates/407104c5cd8cf0c226af10fa87b4685c882665f2ef39c9ee1119911f225e5fc7?u=35279340" target="_blank" className="cert" rel='noopener noreferrer'>Linkedln</a></td>
    <td><a href="https://www.linkedin.com/learning/certificates/407104c5cd8cf0c226af10fa87b4685c882665f2ef39c9ee1119911f225e5fc7?u=35279340" target="_blank"  className="cert" rel='noopener noreferrer'>
          Machine Learning in Mobile Applications</a></td>
</tr>

  </tbody>
</table>
</div>

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
