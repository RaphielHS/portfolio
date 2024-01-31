import './components/Button.css';
import { Parallax } from 'react-parallax';
import React from 'react';
import './App.css';
import './components/Cards.css'

const Config = {
  info: {
    name: "RaphielHS",
    desc: "",
    contacts: [
      {
        "url": "", // url, ex: github.com/RaphielHS
        "title": "" // title or name
      }
    ]
  },
  qna: [
    // {
    //   question: "",
    //   answer: "",
    //   extraNotes: ""
    // }
  ],
  projects: [
    // {
    //   title: "",
    //   desc: "",
    //   github: "",
    //   demo: "",
    //   thumbnail: ""
    // }
  ]
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const insideStyles = {
  background: "white",
  // padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

function FadeInSection(props) {
  setTimeout(function() {}, !props.delay ? 0 : props.delay)
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  setVisible(entry.isIntersecting);
              }
          });
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
  }, []);
  setTimeout(() => {}, props.delay);
  return (
    <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}>
        {props.children}
    </div>
  );
}



function App() {
  return (
    <div>
      <div style={styles} id="homee">
        <Parallax bgImage={process.env.PUBLIC_URL + "/images/1.jpeg"} strength={-300} blur={{ min: -15, max: 15 }}>
          <div style={{ height: 800 }}>
            <div class="loginBorder" style={insideStyles}>
              <div style={{width: 500, height: 350}}>
                <div class="container">
                  <h1>Hello, My name is</h1>
                  <h1 class="website_name"><a href="/" class="link">Raphiel</a></h1>
                  <br/><br/>
                  <a href="/#learn-more" class="link btns btn--outline btn--large last-in-load1">Learn More</a>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
        <div id="learn-more">
          <nav style={{position: "sticky", top: "0"}}>
            {/* <div class="menu" style={{opacity: opacity}}> */}
            <div class="menu">
              <p class="website_name"><a style={{"text-decoration": "none"}} href="#homee" class="link">Raphiel</a></p>
              <div class="menu_links">
                <a href="#projects" class="link">projects</a>
                <a href="#homee" class="link">home</a>
                <a href="#learn-more" class="link">About</a>
              </div>
              <div class="menu_icon">
                <span class="icon"></span>
              </div>
            </div>
          </nav>
          <FadeInSection>
            <div style={{fontSize: 20}}>
              <img style={{marginTop: 5, borderRadius: '200px', width: 450}} src={process.env.PUBLIC_URL + "/avatar/1.jpg"} alt="Image :D"/>
              <FadeInSection>
                <h1>Hello, My Name is <h1>Raphiel</h1></h1>
                <FadeInSection>
                  <div style={{fontSize: 30, fontWeight: 800}}>
                    <p></p>
                  </div>
                </FadeInSection>
              </FadeInSection>
            </div>

            {/*  Projects */}
            
            <FadeInSection>
              <div style={{marginTop: 200, background: process.env.PUBLIC_URL + "/images/1.jpeg"}} id="projects">
                <h1 style={{fontSize: '50px'}}>Projects</h1>
                {/* style={{display: 'grid', "grid-template-columns": '50% 50%', margin: 'auto'}} */}
                <div class="card_container">
                  {Config.projects.length > 0 ? Config.projects.map(function(d, index) {
                    return (
                      <FadeInSection>
                        <div class="card">
                          <div class="content">
                            <div class="imgBx">
                              <img alt='thumbnail' src={!d.thumbnail ? process.env.PUBLIC_URL + "/images/1.jpeg" : d.thumbnail}/>
                            </div>
                            <div class="contentBx">
                              <h3>{!d.title? 'Unnamed' : d.title}<br/><span>{!d.desc ? '' : d.desc}</span></h3>
                            </div>
                          </div>
                          <ul class="sci">
                            <li>
                              <a href={!d.demo ? "" : d.demo} class={!d.github ? 'disableLink' : ''}><img src={process.env.PUBLIC_URL + "/svg/new tab.svg"} alt="new tab svg" class='svg'/>Demo</a>
                            </li>
                            <li>
                              <a href={!d.github ? "" : d.github} class={!d.github ? 'disableLink' : ''}><img src={process.env.PUBLIC_URL + "/svg/github.svg"} alt="github svg" class='svg'/>Github</a>
                            </li>
                          </ul>
                        </div>
                      </FadeInSection>)
                    }
                  ) : <h1 style={{fontSize: 100, color: "black", marginTop: -500}}>No Projects Found</h1>}
                </div>
              </div>
            </FadeInSection>
          </FadeInSection>
        </div>
        <FadeInSection>
          <div className='footer-container' style={{fontSize: '20px'}}>
            <div class='footer-links'>
              <div className='footer-link-wrapper'>
                <div class="footer-link-items inline">
                  <h2>Donate</h2>
                  <a href="https://trakteer.id/raphiel" rel="noreferrer noopener" target="_blank" style={{"text-decoration": "none"}} class="footer-url">Trakteer</a>
                </div>
                <div class='footer-link-items'>
                  <h2>Contacts</h2>
                  <a href="https://github.com/RaphielHS" rel="noreferrer noopener" target="_blank" style={{"text-decoration": "none"}} class="footer-url">Github</a>
                </div>
              </div>
              <div className='footer-link-wrapper'>
              </div>
            </div>
            <section class='social-media'>
              <div class='social-media-wrap'>
                <div class='footer-logo'>
                  <a href='/' className='social-logo'>
                    Raphiel
                  <i class='fab fa-typo3' />
                  </a>
                </div>
                <small class='website-rights'>RAPHIEL © 2021</small>
              </div>
            </section>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
  
export default App;