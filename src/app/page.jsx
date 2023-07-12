"use client"
import { useState } from 'react'
import styles from './page.module.css'
import PersonalForm from './components/InfoForm/PersonalForm'
import Plans from './components/Plans/Plans'
import VerifyInfo from './components/VerifyInfo/VerifyInfo'



export default function Home() {
  const [step, setStep] = useState(1)

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <nav>
          <button className={`${step === 1 ? styles.activeButton : null}`}>Personal Info</button>
          <button className={`${step === 2 ? styles.activeButton : null}`}>Select a plan</button>
          <button className={`${step === 3 ? styles.activeButton : null}`}>Verify your information</button>
        </nav>
        {step === 1 ? <PersonalForm setState={setStep}/> : null}
        {step === 2 ? <Plans setState={setStep}/> : null}
        {step === 3 ? <VerifyInfo /> : null}
      </div>
    </main>
  )
}
