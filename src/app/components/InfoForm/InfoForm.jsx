"use client"
import React from 'react'
import {useForm} from 'react-hook-form'
import styles from '../../page.module.css'


export default function InfoForm({setSate}) {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    const {name, email, phonenumber, postalcode} = data

    if(name && email && phonenumber && postalcode){
      setSate(2)
      localStorage.setItem('infoform', JSON.stringify(data))
    }
  }

  const Mask = () => {
    const postalGetByID = document.getElementById('postalCode')
    if(postalGetByID.value.length == 4) postalGetByID.value += '-'
  }

  return (
    <div className={styles.containerForm}>
        <h2 className={styles.titlePlans}>Personal Information</h2>
        <small className={styles.subtitlePlans}>Please  provide your name, email adress, phone number and your postal code.</small>
        <form method='POST' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            Name: 
            <input {...register("name", {required: true})} placeholder='Adyn Adulf'/>
          </label>
          <label htmlFor="email">
            Email:
            <input type='email'{...register("email",  {required: true})} placeholder='exemple@exemple.com'/>
          </label>
          <div>
            <label htmlFor="phone">
              Phone number:
              <input {...register("phonenumber",  {required: true})} maxLength={14} placeholder='+351123456789' id='phonenumber'/>
            </label>
            <label htmlFor="postalcode">
              Postal code:
              <input {...register("postalcode",  {required: true})} placeholder='0000-000' id='postalCode'  maxLength={8} onKeyUp={Mask}/>
            </label>
          </div>
          <button type='submit'>Next Step</button>
        </form>
      </div>
  )
}
