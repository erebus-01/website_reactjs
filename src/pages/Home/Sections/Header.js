import React from 'react'
import { THEMES } from '../../../Theme/ColorTheme.js'
import styled from 'styled-components'
import "@fontsource/open-sans"
import logo from '../../../assets/logo-white.svg'
import 'boxicons'

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 3.7em;
  top: 0;
  z-index: 1000;
  background-color: #2A2A2A;
`

const NavBar = styled.nav`
  display: flex;
  height: 3.7em;
  padding: 0;
`

const Left = styled.div`
  margin-right: auto;
`

const Right = styled.div`
  height: 3.7em;
`

const Logo = styled.a`
  cursor: pointer;
  float: left;
  height: 3.7em;
  overflow: hidden;
  width: 5em;
  background-color: #2a2a2a;
  background: url(${logo}) 50% no-repeat;
  background-size: 35px auto;
  outline: 0!important;
`

const Box = styled.div`
  cursor: pointer;
  float: left;
  height: 3.7em;
  overflow: hidden;
  width: 5em;
`

const BoxMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 0 30px;
  pointer-events: auto;
  position: relative;
  -webkit-transition: .1s;
  -o-transition: .1s;
  transition: .1s;
  cursor: pointer;
  opacity: 1;

  span{
    border-radius: 2.14286px;
    display: inline-block;
    height: 3px;
    left: 50%;
    margin-left: -15px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    -webkit-transition: .1s;
    -o-transition: .1s;
    transition: .1s;
    width: 30px;
    background-color: #e7e7e7;
  }
  span::before{
    border-radius: 2.14286px;
    top: 8px;
    content: "";
    display: inline-block;
    height: 3px;
    left: 0;
    background-color: #e7e7e7;
    position: absolute;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    width: 30px;
  }
  span::after {
    top: -8px;
    border-radius: 2.14286px;
    content: "";
    display: inline-block;
    height: 3px;
    left: 0;
    position: absolute;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    width: 30px;
    background-color: #e7e7e7;
  }
`

const BgButton = {
  background: "#0078f2"
}

const ButtonRight = styled.div`
  cursor: pointer;
  float: left;
  height: 100%;
  overflow: visible;
  position: relative;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
`

const Download = styled.a`
  font-family: "Open Sans", sans-serif;
  display: block;
  height: 100%;
  letter-spacing: .075em;
  min-width: 50px;
  padding: 0 1em;
  text-align: center;
  text-transform: uppercase;

  .download{
    display: block;
    max-width: 220px;
    min-width: 100px;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 400;
    font-size: .625em;
    line-height: 22px;
    letter-spacing: 1.05px;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    top: 50%;
    transform: translateY(-50%);
    white-space: nowrap;
  }

`

const Contact = styled.div`
  font-family: "Open Sans", sans-serif;
  display: block;
  height: 100%;
  letter-spacing: .075em;
  min-width: 60px;
  text-align: center;
  text-transform: uppercase;
  .use-name{
    display: inline-block;
    font-size: .625em;
    line-height: 22px;
    color: #e7e7e7;
    padding: 0 10px;
    margin: 0;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  i{
    display: block;
    float: left;
    font-size: 1.25em;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    color: #ccc;
  }

  .bxs-user::after{
    background-color: #52971c;
    border-radius: 50%;
    bottom: -1px;
    content: "";
    display: block;
    height: 8px;
    position: absolute;
    right: 0px;
    width: 8px;
  }
`

const Header = () => {
  return (
    <Section id="header">
      <NavBar>
        <Left>
          <Box>
            <Logo/>
          </Box>
          <BoxMenu>
            <span></span>
          </BoxMenu>
        </Left>
        <Right>
          <ButtonRight>
            <Contact>
            <i className='bx bx-globe' ></i>
            </Contact>
          </ButtonRight>
          <ButtonRight>
            <Contact>
              <i className='bx bxs-user' ></i>
              <span className='use-name'>hiepham001</span>
            </Contact>
          </ButtonRight>
          <ButtonRight style={BgButton}>
            <Download><span className='download'>Download</span></Download>
          </ButtonRight>
        </Right>
      </NavBar>
    </Section>
  )
}

export default Header