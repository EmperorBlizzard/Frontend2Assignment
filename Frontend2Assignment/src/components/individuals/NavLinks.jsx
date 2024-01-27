import React from 'react'
import { NavLink } from "react-router-dom";

function NavLinks({name, link}) {
  return (
    <NavLink to={link}>{name}</NavLink>
  )
}

export default NavLinks