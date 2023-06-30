"use client"
import React, { useState } from 'react'
import Styles from './plans.module.css'

export default function Plans() {
  const [selectedCard , setSelectedCard] = useState(null)

  const handleCardClick = (e) => {
    setSelectedCard(e.target.id)    
  }

  return (
    <div className={Styles.containerPlans}>
      <h2 className={Styles.titlePlans}>Plan</h2>
      <p className={Styles.subtitlePlans}>Select your plan</p>
      <div className={Styles.containerPlansWrapper}>
        <div id='card-basic' className={`${Styles.containerPlansCard} ${selectedCard === 'card-basic' ? Styles.activeCard : ''}`} onClick={handleCardClick}>
          <strong>Basic</strong>
          <h2>$10</h2>
          <span>
            <p>Lorem ipsum</p>
          </span>
        </div>
        <div id='card-pro' className={`${Styles.containerPlansCard} ${selectedCard === 'card-pro' ? Styles.activeCard : ''}`} onClick={handleCardClick}>
          <strong>Pro</strong>
          <h2>$20</h2>
          <span>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </span>
        </div>
        <div id='card-business' className={`${Styles.containerPlansCard} ${selectedCard === 'card-business' ? Styles.activeCard : ''}`} onClick={handleCardClick}>
          <strong>Business</strong>
          <h2>$40</h2>
          <span>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </span>
        </div>
      </div>
    </div>
  )
}
