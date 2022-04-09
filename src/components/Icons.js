import React from 'react'
import { AiFillAlert, AiFillFacebook} from "react-icons/ai";
import styles from "./SocialList.module.css"

function Icons() {
  return (
    <div>
        <ul className={styles.social_list}>
            <li><AiFillAlert /></li>

            <li><AiFillFacebook /></li>
        </ul>

    </div>
  )
}

export default Icons