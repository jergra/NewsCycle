'use client'
import React, { useCallback, useEffect, useState } from 'react'
import styled from'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 100vh;
  background-image: url('https://picsum.photos/200/300?grayscale');
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  background-color: rgba(5, 5, 5, 0.8); /* adjust opacity here */
  font-family: 'Open Sans', sans-serif;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 20vh;
`;
const Header = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
`;
const Tagline = styled.p`
  font-size: 18px;
  color: #fff;
`;
const SpeedSelect = styled.select`
  font-size: 18px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #f2f2f2;
  }
`;
const Option = styled.option`
  font-size: 18px;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: transparent;
`;
const GithubLink = styled.a`
  font-size: 18px;
  color: #777777;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #555555;
  }
`;

const NewsCycle = () => {
    const [speed, setSpeed] = useState('4')
    const [intervalId, setIntervalId] = useState(null)
    
    const handleSpeedChange = useCallback((e: any) => {
      setSpeed(() => {      
        // update your state via callback, this gives you the option
        // to access the previous state and set the localStorage value
        const newSpeed = e.target.value === "4" ? "4" : e.target.value;
        localStorage.setItem("speed", newSpeed);
        return newSpeed;
      });
      if (intervalId) {
        clearInterval(intervalId)
      }
    }, []);
  
    useEffect(() => {
      // set the initial speed value when component mounts
      // but only when the window object is defined
      if (typeof window === undefined) return;
      setSpeed(localStorage?.getItem("speed") ?? "4");
    }, []);
  
    useEffect(() => {
        const interval: any = setInterval(() => {
          newPage()
        }, parseFloat(speed) * 60000);
        setIntervalId(interval)
        return () => clearInterval(interval);
    }, [speed])
    
    // const handleSpeedChange = (e: any) => {
    //   setSpeed(e.target.value)
    //   if (intervalId) {
    //     clearInterval(intervalId)
    //   }
    // }
    
    const newPage = () => {
      const urls = [
        ["CNBC", "http://www.cnbc.com/"],
        ["CNN", "http://www.cnn.com/"],
        ["Fox", "http://www.foxnews.com/"],
        ["Google", "https://news.google.com/"],
        ["MarketWatch", "http://www.marketwatch.com/"],
        ["MSNBC", "http://www.msnbc.com"]
      ]
      const randomPage = Math.floor(Math.random() * (urls.length));  
      const vw = window.screen.width
      const vh = window.screen.height
      try {
        const popup: any = window.open("", "w1", 'height=' + vh + ',width=' + vw + ',resizable=yes,scrollbars=yes');
        popup.focus()
        popup.location = urls[randomPage][1]
      } catch (error) {
        console.error("Failed to open new window", error)
      }
   }
   return (
      <Container>
        <HeaderContainer>
          <Header>NewsCycle</Header>
          <Tagline>Stay informed, effortlessly.</Tagline>
        </HeaderContainer>
        <SpeedSelect value={speed} onChange={handleSpeedChange}>
          <Option value="1">1 minute</Option>
          <Option value="2">2 minutes</Option>
          <Option value="3">3 minutes</Option>
          <Option value="4">4 minutes</Option>
          <Option value="6">6 minutes</Option>
          <Option value="8">8 minutes</Option>
          <Option value="80000">Stop</Option>
        </SpeedSelect>
        <Footer>
          <GithubLink href="https://github.com/jergra/NewsCycle/tree/main" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </GithubLink>
        </Footer>
      </Container>
   )
}
export default NewsCycle;
