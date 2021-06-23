import * as React from "react"

import { Container, Flex, H2 } from "../../styles/globalStyles"
import { SkillSection } from "../../styles/skillStyles"


import { StaticImage } from "gatsby-plugin-image"

const Skill = () => (

 <SkillSection>

    <Container>
      <H2 style={{marginBottom:"50px"}}>MY SPECIALITY</H2>

        <Flex className="">
            <div className="grid__6">
              <Flex>
                <div className="single__brand">
                  <StaticImage src = "../images/skills/react_redux.png" alt="react + redux icon" className="skill__icon" />
                </div>

                <div className="single__brand">
                  <StaticImage src = "../images/skills/javascript.png" alt="javascript icon" className="skill__icon" />
                </div>

                <div className="single__brand">
                  <StaticImage src = "../images/skills/html.png" alt="html icon" className="skill__icon" />
                </div>

              </Flex>
            </div>

            <div className="grid__6 Skill-image">
              {/* <StaticImage src = "../images/Skill-me.png" alt="Skill image" /> */}
            </div>

        </Flex>
    </Container>

 </SkillSection>

  
  )


export default Skill
