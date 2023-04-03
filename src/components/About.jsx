import React from 'react'
import '../styles/about.scss'

const About = () => {
  return (
    
    <div id='about'>
        {/* left for pic  */}
        <section>
            <img src="https://images.pexels.com/photos/7583935/pexels-photo-7583935.jpeg?auto=compress&cs=tinysrgb&w=600" alt="about" />
        </section>

        {/* for my self */}
        <section>
            <div>
                <h2>About Me</h2>
                <h3>A Creative Frond end Developer based in Uttarakhand, India 📍 </h3>
                <p>Hello, I am a skilled React JS front-end developer,I have a strong passion for crafting beautiful, responsive, and efficient user interfaces that provide the best possible user experience.

                As a React JS developer, I have a deep understanding of the React library and its ecosystem, including Redux, React Router. I am proficient in HTML5, CSS3, SASS ,JavaScript and familiar with EXPRESS, NODE AND MONGODB, and I have a strong knowledge of the latest front-end development trends and technologies.
                
                In addition to my technical skills, I am a great team player and a good communicator.

                Overall, I am confident in my ability to create engaging and performant React-based applications that meet the needs of businesses and users alike. If you are looking for a dedicated React JS developer, please feel free to contact me.</p>
                <aside>
                    TECH STACK <ul>
                        <li><img  src='https://img.icons8.com/color/1x/html-5.png' alt='Loading'></img></li>
                        <li><img  src='https://img.icons8.com/color/1x/css3.png' alt='Loading' ></img></li>
                        <li><img  src='https://img.icons8.com/fluency/1x/javascript.png' alt='Loading'></img></li>
                        <li><img  src='https://img.icons8.com/ultraviolet/1x/react.png'alt='Loading'></img></li>
                        <li><img  src='https://img.icons8.com/color/1x/sass-avatar.png'alt='Loading'></img></li>


                    </ul>
                </aside>
            </div>

        </section>
    </div>
  )
}

export default About