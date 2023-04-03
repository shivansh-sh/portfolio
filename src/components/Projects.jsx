import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../styles/projects.scss'
import data from '../assets/data.json'
const Projects = () => {
  return (
    <div id='projects'>
        <h2>Projects</h2>
        <section>
            <article>
                <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={2000}
                infiniteLoop={true}
                autoPlay={true}
                > 
                    {
                        data.projects.map((i) => (
                            <div key={i.title} className="workItem" >
                                <img src={i.imgSrc} alt={i.title} />
                                <aside>
                                    <h3>{i.title}</h3>
                                    <p>{i.description}</p>
                                    <a href={i.url} target={"blank"}>View Demo</a>
                                </aside>
                            </div>
                        ))
                    }
                </Carousel>
            </article>
        </section>
    </div>
  )
}

export default Projects