import React from 'react'
import styles from '../../page.module.css'
import {useForm} from 'react-hook-form'

export default function PersonalForm({setState}) {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    const {name, email, phonenumber, postalcode, country} = data

    if(name && email && phonenumber && postalcode && country){
      setState(2)
      localStorage.setItem('infoform', JSON.stringify(data))
    }
  }
   
  return (
    <div  className={styles.containerForm}>
      <h2>Personal Info</h2>
      <form method='POST' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">
            Name:
            <input {...register("name", { required: true })} id='name' placeholder='Adul yan'/>
          </label>
          <label htmlFor="email">
            Email:
            <input {...register("email", { required: true })} id='email' placeholder='exemple@exemple.com'/>
          </label>
          <label htmlFor="phone">
            Phone number:
            <input {...register("phonenumber", { required: true })} id='phone' placeholder='+351 999 888 777'/>
          </label>
          <label htmlFor="country">
            Country:
            <input {...register("country", { required: true })} id='country' placeholder='Portugal'/>
          </label>
          <label htmlFor="postalcode">
            Postal code:
            <input {...register("postalcode", { required: true })} id='postalcode' placeholder='1234567'/>
          </label>
          <input type='submit' value={'Next Step'}/>
        </div>
      </form>
    </div>
  )
}
