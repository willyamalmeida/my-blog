import React from "react"
import PropTypes from "prop-types"

import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import * as S from "./styled"
import GlobalStyled from "../../styles/global"

const Layout = ({ children }) => {  
  return (
    <S.LayoutWrapper>
      <GlobalStyled />
      <Sidebar />      
      <S.LayoutMain>
        {children}
      </S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
