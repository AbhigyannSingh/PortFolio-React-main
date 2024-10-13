import React from 'react'
import Image1 from '../images/image1.jpg'
import Resume from '../images/Abhigyan_resume.pdf'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={Image1} alt="meraface"/>
                </div>
                <div className="column right">
                <div className="text">I'm Abhigyan Pratap Singh </div>
                    <p>I'm currently pursuing my MCA at National Institute of Technology, Raipur.</p>
                    <p>I love programming and solving problems. Check me out on <a href="https://leetcode.com/u/AbhigyanSingh789/" target='blank'>Leetcode</a>, and <a href="https://www.naukri.com/code360/profile/b4f63225-c935-44c2-a9d1-c745266e1404" target="blank">Coding Ninjas</a>.</p>
                    <p>My other interests are Web Development and Cooking.</p>
                    <p>My core interest lies mainly in web development but is not restricted to it. I always love exploring and learning new technologies.</p>
                    <p>I like going to the gym and focusing on fitness. I have also represented my college in inter NIT powerlifting and bodybuilding competitions.</p>

                    <a className="resumeBtn" href={Resume} target="_blank" rel="noreferrer">Download Resume</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;
