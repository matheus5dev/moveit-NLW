import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/69397339?s=400&u=d9bcae605447f15cb35c34bd224d4e1fe461f1f8&v=4" alt="Matheus Lopes"/>
      <div>
        <strong>Matheus Lopes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
          </p>
      </div>
    </div>
  )
}