import React from 'react'
import style from './plans.module.css'

export default function Cards() {
  const [seletedElem, setSelectedElem] = React.useState('')

  const handleCardClick = (e) => {
    const idTarget = e.target.id || e.target.parentNode.id
    setSelectedElem(idTarget)   
  }

  return (
    <>
    <div className={`${style.cardContainer} ${seletedElem === 'card-basic' ? style.cardActive : ''}`} onClick={handleCardClick} id="card-basic">
      <span>Basic</span>
      <span>$10</span>
    </div>
    <div className={`${style.cardContainer} ${seletedElem === 'card-pro' ? style.cardActive : ''}`} onClick={handleCardClick} id="card-pro">
      <span>Pro</span>
      <span>$10</span>
    </div>
    <div className={`${style.cardContainer} ${seletedElem === 'card-business' ? style.cardActive : ''}`} onClick={handleCardClick} id="card-business">
      <span>Business</span>
      <span>$10</span>
    </div>
    
    </>
  )
}
