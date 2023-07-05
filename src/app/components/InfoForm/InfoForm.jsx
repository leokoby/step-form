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
            <input {...register("email",  {required: true})} placeholder='exemple@exemple.com'/>
          </label>
          <div>
            <label htmlFor="phone">
              Phone number:
              <input {...register("phonenumber",  {required: true})} placeholder='+351999999999'/>
            </label>
            <label htmlFor="postalcode">
              Postal code:
              <input {...register("postalcode",  {required: true})} placeholder='0000-000'/>
            </label>
          </div>
          <button type='submit'>Next Step</button>
        </form>
      </div>
  )
}
