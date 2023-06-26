import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <aside className={styles.containerAside}>
        <div>
          <span className={styles.containerStep}>
            <p className={styles.bullet}>1</p>
            <span className={styles.stepInfo}>
              <p className={styles.stepNumber}>STEP 1</p>
              <p className={styles.stepName}>YOUR INFO</p>
            </span>
          </span>
          <span className={styles.containerStep}>
            <p className={styles.bullet}>2</p>
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
        <form>
          <label htmlFor="name">
            Name:
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="phone">
            Phone number:
            <input type="tel" name="phone" id="phone" />
          </label>
          <label htmlFor="postalcode">
            Postal code:
            <input type="text" name="postalcode" id="postalcode" />
          </label>
        </form>
      </div>
    </main>
  )
}
