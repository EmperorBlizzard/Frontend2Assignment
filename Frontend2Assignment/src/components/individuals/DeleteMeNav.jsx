import React from 'react'
import { NavLink } from "react-router-dom";

function DeleteMeNav({name, link}) {
  return (
    <NavLink to={link}>{name}</NavLink>
  )
}

export default DeleteMeNav