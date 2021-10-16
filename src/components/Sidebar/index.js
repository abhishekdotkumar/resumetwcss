import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements'
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='about' onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to='services' onClick={toggle}>
              Skills
            </SidebarLink>
            <SidebarLink to='projects' onClick={toggle}>
              Projects
            </SidebarLink>
            <SidebarLink to='feedback' onClick={toggle}>
              Feedback
            </SidebarLink>
            <SidebarLink to='findme' onClick={toggle}>
              Contact
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
