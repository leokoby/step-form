"use client"
import { useState } from 'react'
import styles from './page.module.css'
import {useForm} from 'react-hook-form'

export default function Home() {
  const [step, setStep] = useState(1)
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    const {name, email, phonenumber, postalcode} = data
    console.log(name, email, phonenumber, postalcode)
    if(name && email && phonenumber && postalcode){
      setStep(2)
    }
  }

  return (
    <main className={styles.main}>
      <aside className={styles.containerAside}>
        <div>
          <span className={styles.containerStep}>
            <p className={`${styles.bullet} ${step > 0 ? styles.bulletActive : ''}`}>1</p>
            <span className={styles.stepInfo}>
              <p className={styles.stepNumber}>STEP 1</p>
              <p className={styles.stepName}>YOUR INFO</p>
            </span>
          </span>
          <span className={styles.containerStep}>
            <p className={`${styles.bullet} ${step > 1 ? styles.bulletActive : ''}`}>2</p>
            <span className={styles.stepInfo}>
              <p className={styles.stepNumber}>STEP 2</p>
              <p className={styles.stepName}>SELECT A PLAN</p>
            </span>
          </span>
          <span className={styles.containerStep}>
            <p className={styles.bullet}>3</p>
            <span className={styles.stepInfo}>
              <p className={styles.stepNumber}>STEP 3</p>
              <p className={styles.stepName}>VERIFY YOUR INFORMATIONS</p>
            </span>
          </span>
        </div>
      </aside>
      <div className={styles.containerForm}>
        <h2>Personal Information</h2>
        <small>Please  provide your name, email adress, phone number and your postal code.</small>
        <form method='POST' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            Name:
            <input {...register("name", {required: true})} placeholder='digit your name'/>
          </label>
          <label htmlFor="email">
            Email:
            <input {...register("email",  {required: true})} placeholder='digit your email'/>
          </label>
          <div>
            <label htmlFor="phone">
              Phone number:
              <input {...register("phonenumber",  {required: true})} placeholder='+000 000000-000'/>
            </label>
            <label htmlFor="postalcode">
              Postal code:
              <input {...register("postalcode",  {required: true})} placeholder='0000-000'/>
            </label>
          </div>
          <button type='submit'>Next Step</button>
        </form>
      </div>
    </main>
  )
}
