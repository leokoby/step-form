import React, {useContext} from 'react'
import style from './plans.module.css'
import { contextPlans } from './Plans'

export default function Cards() {
  const {seletedElem, setSelectedElem} = useContext(contextPlans)

  const handleCardClick = (e) => {
    const idTarget = e.target.id || e.target.parentNode.id
    setSelectedElem(idTarget)
    localStorage.setItem("plan", idTarget)
  }

  return (
    <>
    <div className={`${style.cardContainer} ${seletedElem === 'card-basic' ? style.cardActive : ''}`} onClick={handleCardClick} id="card-basic">
      <span>Basic</span>
      <span>$10</span>
    </div>
    <div className={`${style.cardContainer} ${seletedElem === 'card-pro' ? style.cardActive : ''}`} onClick={handleCardClick} id="card-pro">
      <span>Pro</span>
      <span>$20</span>
    </div>
    <div className={`${style.cardContainer} ${seletedElem === 'card-business' ? style.cardActive : ''}`} onClick={handleCardClick} id="card-business">
      <span>Business</span>
      <span>$30</span>
    </div>
    
    </>
  )
}
