"use client"
import React from 'react'
import style from './verifyInfo.module.css'

export default function VerifyInfo() {
  const [isClicked, setIsClicked] = React.useState(false)
  let userInfo = {}

  if(typeof window !== undefined){
    let user = JSON.parse(window.localStorage.getItem('infoform'))
    let selectedPlan = window.localStorage.getItem('plan')

    userInfo = {
      name: user.name,
      email: user.email,
      phone: user.phonenumber,
      postalcode: user.postalcode,
      plan: selectedPlan,
    }
  }

  return (
    <>
    {!isClicked ? 
      (
      <div className={style.containerInformations}>
        <h2>Verify your informations: </h2>
        <p><strong>Name: </strong>{userInfo.name}</p>
        <p><strong>Email: </strong>{userInfo.email}</p>
        <p><strong>Phone number: </strong>{userInfo.phone}</p>
        <p><strong>Postalcode: </strong>{userInfo.postalcode}</p>
        <p><strong>Plan: </strong>{userInfo.plan}</p>
        <button onClick={() => setIsClicked(!isClicked)}>Send</button>
      </div>
      )
     : (
      <h3 className={style.textSuccessSignature}>Congratulations! Your signature has been received!</h3>
     )}
    </>
  )
}
