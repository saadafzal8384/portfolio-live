import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import ME from '../../assets/saad.png'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
<h2>About Me</h2>
<div className="container about__container">
  <div className="about__me">
     <div className="about__me-image">
      <img src={ME} alt="About Image" />
   </div>
  </div>
   <div className="about__content">
    <div className="about__cards">
      <article className='about__card'>
        <FaAward className='about__icon' />
        <h5>Experience</h5>
        <small>3+ Years Working</small>
      </article>
      <article className='about__card'>
        <FiUsers className='about__icon' />
        <h5>Clients</h5>
        <small>200+</small>
      </article>
      <article className='about__card'>
        <FaAward className='about__icon' />
        <h5>Experience</h5>
        <small>3+ Years Working</small>
      </article>
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, at neque alias quia nam natus vero sint obcaecati incidunt adipisci unde possimus libero dicta! Laboriosam vero similique assumenda non sapiente placeat tempora voluptas, aliquid earum perferendis nihil molestiae magnam pariatur ipsa id reiciendis esse, illo aperiam doloribus? Facere eos pariatur aperiam. Dignissimos fugit quos similique ad reiciendis debitis delectus sed labore alias amet nesciunt, magnam adipisci minima sequi vitae, omnis aliquam architecto mollitia. Ut quae, facilis amet nam eius eum officia ad reprehenderit beatae est cum. Iure voluptatum ullam nam quod sequi. Quas dolore corporis enim exercitationem delectus fuga. Labore?
    </p>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
  </div>
</div>
      </section>
  )
}

export default About