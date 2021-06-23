import * as React from "react"

import { Container, Flex, H2 } from "../../styles/globalStyles"
import { ProjectSection } from "../../styles/projectStyles"


import { StaticImage } from "gatsby-plugin-image"

const Project = () => (

 <ProjectSection>

            <Container>
                <Flex className="row__reverse">

                    <div className="grid__6 site__title">
                        <H2 style={{marginBottom:"20px"}}>LET ME INTRODUCE MYSELF</H2>
                        <p style={{width: "70%"}}>
                        3+ years of extensive professional experience and skills in HTML5, CSS3, SASS/SCSS, less, React, Redux, Javascript, ES6, jQuery, AJAX, Bootstrap 4, and specializing in PSD to HTML5 semantic conversion with keen attention to details. Working knowledge of design tools such as Sketch, Illustrator and Photoshop. Currently working as a freelancer and looking for full time opportunity.<br /><br />
                        I believe anything can be overcome through commitment and hardwork. Always up for learning new things.
                        </p>
                    </div>

                    <div className="grid__6 about-image">
                      <StaticImage src = "../images/about-me.png" alt="about image" />
                    </div>

                </Flex>
            </Container>

 </ProjectSection>

  
  )


export default Project
