import React from 'react'
import { NavLink } from "react-router-dom";

function MenuLinks({name, link}) {
  return (
    <NavLink to={link}>{name}</NavLink>
  )
}

export default MenuLinks