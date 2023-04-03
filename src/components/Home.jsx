import React, { useRef } from 'react'
import '../styles/home.scss'
import {animate, motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import pic from '../assets/shivi.jpg'
const Home = () => {

    const clientCount = useRef(null);
    const projectCount= useRef(null);

    const animationClientsCount = () =>{
        animate(0,100, {
            duration:1,
            onUpdate:(v) => (clientCount.current.textContent = v.toFixed())
        })
    }

    const animationProjectCount = () =>{
        animate(0,500, {
            duration:1,
            onUpdate:(v) => (projectCount.current.textContent = v.toFixed())
        })
    }


    const animations = {
        h1:{
            initial:{
                x:"-100%",
                opacity: "0"
            },
            whileInView:{
                x:"0",
                opacity: "1"
            }
        },
        button:{
            initial:{
                y:"-100%",
                opacity: "0"
            },
            whileInView:{
                y:"0",
                opacity: "1"
            }
        }
    }
  return (
    <div id='home'>

        <section>
            <div>
                <motion.h1 {...animations.h1}     
                 >
                    {/* <Typewriter options={{
                    strings: ["Hey, I am Shivansh Chauhan"],
                    cursor:" ",
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "typewriter",
                }} /> */}
                    Hey, I am Shivansh Chauhan 🖐
                </motion.h1>
                <Typewriter options={{
                    strings: ["A Developer", "A Designer",  "A Creater"],
                    cursor:" ",
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "typewriter",
                }} />

                <div>
                    <a href="mailto:shivanshpschauhan@gmail.com">Hire Me</a>
                    <a href="#projects"> Projects <BsArrowUpRight/></a>
                </div>

                    <article>
                        <p>+<motion.span whileInView={animationClientsCount} ref={clientCount}>100
                            </motion.span></p>
                        <span>Clients</span>
                    </article>


                    <aside>
                        <article><p>
                             +<motion.span whileInView={animationProjectCount} ref={projectCount} >100
                            </motion.span>

                             </p>
                        <span>Projects</span>
                        </article>

                        <article>
                            <p>Contact</p>
                        <span>Shivanshpschauhan@gmail.com</span>
                        </article>
                    </aside>

            
            </div>
        </section>


        <section>

            <img src={pic} alt="" />
        </section>
        <BsChevronDown />

    </div>
  )
}

export default Home