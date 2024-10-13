import React from 'react'
import Project0 from '../images/project0.png'
import Project1 from '../images/project1.png'
import Project2 from '../images/project2.png'
import Project3 from '../images/project3.png'
import Project4 from '../images/project4.png'

const Service = () => {
  return (
    <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">My Project</h2>
            <div className="serv-content">
                <a href='' className="card">
                    <div className="img">
                        <img src={Project0} alt="Portfolio"/>
                    </div>
                    <div className="box">
                        <div className="text">Portfolio</div>
                        <p>It contains details of which projects i have worked on and which languages i am familiar with and my interests.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                        {/* <span><i class="fa-brands fa-node"></i><span> Nodejs</span></span> */}
                        <span><i class="fa-brands fa-react"></i><span> Reactjs</span></span>
                    </div>
                </a>
                <a href='https://gemini-clone-main-7s86.vercel.app/' className="card">
                    <div className="img">
                        <img src={Project4} alt="CoffeeShop"/>
                    </div>
                    <div className="box">
                        <div className="text">Google-Gemini</div>
                        <p>
                        A React-based project that provides a user-friendly text interface to interact with a simulated large language model, featuring optional API integration and customizable UI.
                        </p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                        <span><i class="fa-brands fa-react"></i><span> Reactjs</span></span>

                    </div>
                </a>
                <a href='https://quiziz-seven.vercel.app/' className="card">
                    <div className="img">
                        <img src={Project1} alt="Inventrom-Website"/>
                    </div>
                    <div className="box">
                        <div className="text">Flashcard-Quiz</div>
                        <p> An interactive web app for practicing knowledge with personalized quizzes, featuring user authentication, multiple-choice questions, and a timer.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                        <span><i class="fa-brands fa-react"></i><span> Reactjs</span></span>

                    </div>
                </a>
                <a href='https://sorting-visualizer-delta-brown.vercel.app/' className="card">
                    <div className="img">
                        <img src={Project3} alt="To-Do-List"/>
                    </div>
                    <div className="box">
                        <div className="text">Algo-Vision</div>
                        <p>An interactive web app for practicing knowledge with personalized quizzes, featuring user authentication, multiple-choice questions, and a timer.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                        <span><i class="fa-brands fa-react"></i><span> Reactjs</span></span>
                    </div>
                </a>
                <a href='https://github.com/AbhigyannSingh/ecommerce' className="card">
                    <div className="img">
                        <img src={Project2} alt="Netflix-Clone"/>
                    </div>
                    <div className="box">
                        <div className="text">Fashion-Hub</div>
                        <p>A full-stack e-commerce clothing website built with the MERN stack, allowing users to browse, filter, and purchase fashion items seamlessly.</p>
                    </div>
                    <div className="techno">
                        <span><i class="fa-brands fa-html5"></i><span> HTML</span></span>
                        <span><i class="fa-brands fa-css3"></i><span> CSS</span></span>
                        <span><i class="fa-brands fa-js"></i><span> JavaScript</span></span>
                        <span><i class="fa-brands fa-node"></i><span> Nodejs</span></span>
                        <span><i class="fa-brands fa-react"></i><span> Reactjs</span></span>
                    </div>
                </a>
               </div>
            </div>
    </section>
  )
}

export default Service;
