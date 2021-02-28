import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'



export function Countdown(){
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown } = useContext(CountdownContext)
  
  // padStart: Se os minutes tive '5' ele colocara o 0 na frente; split: Faz um tipo de separação com o que é passado
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button 
        disabled
        className={`${styles.countdownButton} ${styles.countdownButtonFinished}`}
      >
        Ciclo encerrado   
        <img src="icons/right.svg"/>
      </button>
      ) : (
        <>
          { isActive ? (
            <button 
              type='button' 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo   
              <img src="icons/close.svg" className={styles.closeWhite}/>
            </button>
          ) : (
            <button 
            type='button' 
            className={styles.countdownButton}
            onClick={startCountdown}
          >
            Iniciar um ciclo
            <img src="icons/arrow-right.svg"/>
          </button>
          )}  
        </>
      )}
    </div>
  )
}