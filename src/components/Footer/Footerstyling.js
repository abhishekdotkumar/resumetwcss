import styled from 'styled-components'
export const WebsiteRights = styled.small`
  color: black;
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  padding-bottom: 10px;
`

export const SocialIconLink = styled.a`
  color: black;
  font-weight: 500 !important;
  font-size: 15px !important;
  transition: all 0.3s ease-out;
  &:hover {
    color: #01bf71;
  }
  @media only screen and (max-width: 600px) {
    color: rgba(12, 191, 113, 0.9) !important;
  }
  @media only screen and (max-width: 768px) {
    color: rgba(12, 191, 113, 0.9) !important;
  }
`

export const Cleverabhi = styled.a`
  color: black;
  transition: all 0.3s ease-out;
  font-size: 24px;
  &:hover {
    color: #01bf71;
  }
  @media only screen and (max-width: 600px) {
    color: rgba(12, 191, 113, 0.9) !important;
  }
  @media only screen and (max-width: 768px) {
    color: rgba(12, 191, 113, 0.9) !important;
  }
`

export const ILink = styled.a`
  text-decoration: none;
  font-weight: 500 !important;
  color: black;
  font-size: 16px;
  transition: all 0.3s ease-out;
  &:hover {
    color: #01bf71;
  }
  @media only screen and (max-width: 600px) {
    color: rgba(12, 191, 113, 0.9) !important;
  }
  @media only screen and (max-width: 768px) {
    color: rgba(12, 191, 113, 0.9) !important;
  }
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1704px) {
    flex-direction: column;
  }
`

export const Footeer = styled.footer`
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  //-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animate 1.5s linear infinite;
  @keyframes animate {
    100% {
      filter: hue-rotate(360deg);
    }
  }
`
