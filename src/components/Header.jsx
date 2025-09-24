import React from 'react'
import {AppBar , Toolbar , styled} from "@mui/material"
const StyleApp = styled(AppBar)`
background : #060606`;

export default function Header() {

  return (
    <>
      <StyleApp position='static'>
        <Toolbar>
            <h3 style={{fontSize:"25px",fontFamily:"sans-serif"}}>CodeEditorBySaquib</h3>
        </Toolbar>
      </StyleApp>
    </>
  )
}
