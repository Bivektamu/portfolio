import * as React from "react"

import { Container, Flex, H1, H3, H4, Btn } from "../../styles/globalStyles"
import { BannerSection } from "../../styles/bannerStyles"


import { StaticImage } from "gatsby-plugin-image"

const Banner = () => (

 <BannerSection>

            <Container id="hire-btn">
                <Flex>
                    <div className="grid__6 site__title">
                        <H3>Hey</H3>
                        <H1>I am Bivek</H1>
                        <H4 style={{marginBottom: "40px"}}>Front End Developer</H4>
                        <Btn>
                            <a href="tel:0452424565">
                                hire me
                            </a>
                        </Btn>
                    </div>

                    <div className="grid__6 banner-image">
                      <StaticImage src = "../images/banner-image.png" alt="banner image" />

                     
                    </div>
                </Flex>
            </Container>

 </BannerSection>

  
  )


export default Banner
