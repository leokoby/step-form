"use client"
import { useState } from 'react'
import styles from './page.module.css'
import PersonalForm from './components/InfoForm/PersonalForm'
import Plans from './components/Plans/Plans'



export default function Home() {
  const [step, setStep] = useState(2)

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <nav>
          <button className={`${styles.activeButton}`}>Personal Info</button>
          <button>Select a plan</button>
          <button>Verify your information</button>
        </nav>
        {step === 1 ? <PersonalForm setState={setStep}/> : null}
        {step === 2 ? <Plans /> : null}
        {/* {step === 1 ? <PersonalForm setState={setStep}/> : null} */}
      </div>
    </main>
  )
}
