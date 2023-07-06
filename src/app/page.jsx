"use client"
import { useState } from 'react'
import styles from './page.module.css'
import PersonalForm from './components/InfoForm/PersonalForm'



export default function Home() {
  const [step, setStep] = useState(1)

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <nav>
          <button className={`${styles.activeButton}`}>Personal Info</button>
          <button>Select a plan</button>
          <button>Verify your information</button>
        </nav>
        <PersonalForm setState={setStep}/>
      </div>
    </main>
  )
}
