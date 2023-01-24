import React from 'react'
import proptypes from 'prop-types'

const Rading = ({comment ,rading, color}) => {
  return (
    <div style={{ textAlign: 'center'}}>
       <span>
        <i style={{color}} className={rading >= 1 ? " fas fa-star" : rading >=0.5 ? "fas fa-star-half-alt" : "fas fa-star"}></i>
        <i style={{color}} className={rading >= 2 ? " fas fa-star" : rading >=1.5 ? "fas fa-star-half-alt" : "fas fa-star"}></i>
        <i style={{color}} className={rading >= 3 ? " fas fa-star" : rading >=2.5 ? "fas fa-star-half-alt" : "fas fa-star"}></i>
        <i style={{color}} className={rading >= 4 ? " fas fa-star" : rading >=3.5 ? "fas fa-star-half-alt" : "fas fa-star"}></i>
        <i style={{color}} className={rading >= 5 ? " fas fa-star" : rading >=4.5 ? "fas fa-star-half-alt" : "fas fa-star"}></i>
        </span> 
        <span> { comment && comment}</span>
    </div>
  )
}

Rading.defaultPros = {
  color :' #ff7f00'
}

Rading.proptype = {
    comment : proptypes.string.isRequired,
    rading : proptypes.number.isRequired,
    color : proptypes.string
}

export default Rading