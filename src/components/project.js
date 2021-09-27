import React, { useEffect, useState } from "react"


import { Btn, Container, Flex, H2, H5 } from "../../styles/globalStyles"
import { ProjectSection, ImageWrapper } from "../../styles/projectStyles"

import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { FaLink } from "@react-icons/all-files/fa/FaLink";

import { StaticImage } from "gatsby-plugin-image"

const Project = () => {



  const [flag, setflag] = useState(false)

  useEffect(() => {

    document.addEventListener('scroll', scrolled)

    const secRef = document.getElementById('project')

    const indexOfSec = (Array.from(secRef.parentNode.children).indexOf(secRef))

    const nav = document.getElementById('nav')

    const navItem = (nav.childNodes[indexOfSec])



    function scrolled() {
      const secTop = secRef.offsetTop
      const secH = secRef.getBoundingClientRect().height
      const headerH = document.getElementById('header').getBoundingClientRect().height
      const scrolledVal = window.scrollY + headerH

      if (scrolledVal > secTop && scrolledVal < secTop + secH) {
        setflag(true)
        navItem.classList.add('active')
      }
      else {
        setflag(false)
        navItem.classList.remove('active')
      }

    }


    return () => { document.removeEventListener('scroll', scrolled) }

  }, [])

  return (

    <ProjectSection id="project" className={flag && 'active'}>

      <Container>
        <H2 style={{ marginBottom: "50px" }}>RECENTLY DONE PROJECT</H2>

        <Flex className="flex__wrap">

          <div className="grid__4">
            <ImageWrapper>
              <StaticImage src="../images/portfolio/restaurant.jpg" alt="resturant project image" className="img" />

              <div className="link-wrapper">
                <Btn>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Bivektamu/Restaurant-Webapp-V2">
                    View Code&nbsp;&nbsp;
                    <AiFillGithub />
                  </a>

                </Btn>

                <Btn>
                  <a target="_blank" rel="noreferrer" href="https://restaurantapp.netlify.app/">
                    View Live&nbsp;&nbsp;
                    <FaLink />
                  </a>
                </Btn>
              </div>

            </ImageWrapper>
            <H5 style={{ marginTop: "16px" }}>RESTAURANT WEB APP</H5>
          </div>

          <div className="grid__4">
            <ImageWrapper>

              <StaticImage src="../images/portfolio/devlinked.jpg" alt="devlinked project image" className="img" />

              <div className="link-wrapper">
                <Btn>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Bivektamu/devlinked">
                    View Code&nbsp;&nbsp;
                    <AiFillGithub />
                  </a>

                </Btn>

                <Btn>
                  <a target="_blank" rel="noreferrer" href="http://devlinked.herokuapp.com/">
                    View Live&nbsp;&nbsp;
                    <FaLink />
                  </a>
                </Btn>
              </div>

            </ImageWrapper>
            <H5 style={{ marginTop: "16px" }}>DEVLINKED WEB APP</H5>
          </div>

          <div className="grid__4">
            <ImageWrapper>
              <StaticImage src="../images/portfolio/amazon-clone.jpg" alt="amazon-clone project image" className="img" />

              <div className="link-wrapper">
                <Btn>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Bivektamu/amazon-clone">
                    View Code&nbsp;&nbsp;
                    <AiFillGithub />
                  </a>

                </Btn>

                <Btn>
                  <a target="_blank" rel="noreferrer" href="https://clone-ca2ec.web.app/">
                    View Live&nbsp;&nbsp;
                    <FaLink />
                  </a>
                </Btn>
              </div>

            </ImageWrapper>
            <H5 style={{ marginTop: "16px" }}>AMAZON CLONE WEB APP</H5>
          </div>

          <div className="grid__4">
            <ImageWrapper>
              <StaticImage src="../images/portfolio/netflix-clone.jpg" alt="netflix-clone project image" className="img" />

              <div className="link-wrapper">
                <Btn>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Bivektamu/netflix-clone">
                    View Code&nbsp;&nbsp;
                    <AiFillGithub />
                  </a>

                </Btn>

                <Btn>
                  <a target="_blank" rel="noreferrer" href="https://clone-ca2ec.web.app/">
                    View Live&nbsp;&nbsp;
                    <FaLink />
                  </a>
                </Btn>
              </div>

            </ImageWrapper>
            <H5 style={{ marginTop: "16px" }}>NETFLIX WEB APP</H5>
          </div>

          <div className="grid__4">
            <ImageWrapper>

              <StaticImage src="../images/portfolio/estate.jpg" alt="estate project image" className="img" />

              <div className="link-wrapper">
                <Btn>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Bivektamu/real-estate">
                    View Code&nbsp;&nbsp;
                    <AiFillGithub />
                  </a>

                </Btn>

                <Btn>
                  <a target="_blank" rel="noreferrer" href="https://realestate-reactproject.netlify.app/">
                    View Live&nbsp;&nbsp;
                    <FaLink />
                  </a>
                </Btn>
              </div>

            </ImageWrapper>
            <H5 style={{ marginTop: "16px" }}>REAL ESTATE WEB APP</H5>
          </div>

          <div className="grid__4">
            <ImageWrapper>

              <StaticImage src="../images/portfolio/eshop.jpg" alt="eshop project image" className="img" />

              <div className="link-wrapper">
                <Btn>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Bivektamu/eshop">
                    View Code&nbsp;&nbsp;
                    <AiFillGithub />
                  </a>

                </Btn>

                <Btn>
                  <a target="_blank" rel="noreferrer" href="https://mobilestore-reactproject.netlify.app/">
                    View Live&nbsp;&nbsp;
                    <FaLink />
                  </a>
                </Btn>
              </div>

            </ImageWrapper>
            <H5 style={{ marginTop: "16px" }}>MOBILE STORE WEB APP</H5>
          </div>


        </Flex>
      </Container>

    </ProjectSection >


  )
}


export default Project
