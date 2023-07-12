import React, { createContext } from 'react'
import style from './plans.module.css'
import Cards from './Card'

export const contextPlans = createContext(null)

export default function Plans({setState}) {
  const [seletedElem, setSelectedElem] = React.useState('')

  return (
    <contextPlans.Provider value={{setSelectedElem, seletedElem}}>
    <div className={style.containerPlans}>
      <h2>Select a plan</h2>
      <div className={style.wrapperPlanCards}>
        <div className={style.planCards}>
          <Cards />
        </div>
        <div className={style.infoPlan}>
          {seletedElem === 'card-basic' ? (
            <>
              <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </>
          ) : null}
          {seletedElem === 'card-pro' ? (
            <>
              <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </>
          ) : null}
          {seletedElem === 'card-business' ? (
            <>
              <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </>
          ) : null}
          {seletedElem !== '' || undefined ? (
            <>
              <button onClick={() => setState(3)}>Next Step</button>
            </>
          ) : null}
        </div>
      </div>
    </div>
    </contextPlans.Provider>
  )
}
