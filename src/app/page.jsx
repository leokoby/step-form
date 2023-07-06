"use client"
import { useState } from 'react'
import styles from './page.module.css'
import InfoForm from './components/InfoForm/InfoForm'
import Plans from './components/Plans/Plans'
import VerifyInfo from './components/VerifyInfo/VerifyInfo'



export default function Home() {
  const [step, setStep] = useState(1)

  return (
    <main className={styles.main}>
      <aside className={styles.containerAside}>
        <div>
          <span className={styles.containerStep}>
            <p className={`${styles.bullet} ${step > 0 ? styles.bulletActive : ''}`}>1</p>
            <span className={`${styles.stepInfo} ${step > 0 ? styles.stepActive : ''}`}>
              <p className={styles.stepNumber}>STEP 1</p>
              <p className={styles.stepName}>YOUR INFO</p>
            </span>
          </span>
          <span className={styles.containerStep}>
            <p className={`${styles.bullet} ${step > 1 ? styles.bulletActive : ''}`}>2</p>
            <span className={`${styles.stepInfo} ${step > 1 ? styles.stepActive : ''}`}>
              <p className={styles.stepNumber}>STEP 2</p>
              <p className={styles.stepName}>SELECT A PLAN</p>
            </span>
          </span>
          <span className={styles.containerStep}>
            <p className={`${styles.bullet} ${step > 2 ? styles.bulletActive : ''}`}>3</p>
            <span className={`${styles.stepInfo} ${step > 2 ? styles.stepActive : ''}`}>
              <p className={styles.stepNumber}>STEP 3</p>
              <p className={styles.stepName}>VERIFY YOUR INFORMATIONS</p>
            </span>
          </span>
        </div>  
      </aside>
      {step <= 1 ? <InfoForm setSate={setStep} /> : null}
      {step == 2 ? <Plans  setState={setStep}/> : null}
      {step == 3 ? <VerifyInfo/> : null }
    </main>
  )
}
