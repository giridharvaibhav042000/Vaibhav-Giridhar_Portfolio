import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";


const data=[
{
  id:1,
  image: IMG1,
  title:'Beauty Product Website using HTML5 & CSS3',
  github :"https://github.com/giridharvaibhav042000/beauty-ecommerce-website--html-css-",
  demo:"https://vaibhav-beauty-ecommerce.netlify.app/"
},{
  id:2,
  image: IMG2,
  title:'Portfolio-demo-project',
  github :"https://github.com/giridharvaibhav042000/Portfolio-React-project-1",
  demo:"https://vaibhav-portfolio-demosite.netlify.app/"
},{
  id:3,
  image: IMG3,
  title:'Website Template using HTML5 and CSS3',
  github :"https://github.com/giridharvaibhav042000/Website-Template-HTML5-CSS3",
  demo:"https://vaibhav-website-template-demo.netlify.app/#"
},
// {
//   id:4,
//   image: IMG4,
//   title:'---',
//   github :"https://github.com",
//   demo:"address"
// },{
//   id:5,
//   image: IMG5,
//   title:'---',
//   github :"https://github.com",
//   demo:"address"
// },{
//   id:6,
//   image: IMG6,
//   title:'---',
//   github :"https://github.com",
//   demo:"address"
// }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id, image,title,github, demo})=>{
          return(
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="blank">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="blank">
                live Demo
              </a>
            </div>
          </div>
        </article>
          )
        })
      }
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/" className="btn" target="blank">
                Github
              </a>
              <a
                href="https://github.com/"
                className="btn btn-primary"
                target="blank">
                Github
              </a>
            </div>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
