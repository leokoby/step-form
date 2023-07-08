import React from 'react'
import style from './plans.module.css'
import Cards from './Card'

export default function Plans() {
  return (
    <div className={style.containerPlans}>
      <h2>Select a plan</h2>
      <div className={style.wrapperPlanCards}>
        <div className={style.planCards}>
          <Cards />
        </div>
        <div className={style.infoPlan}>

        </div>
      </div>
    </div>
  )
}
