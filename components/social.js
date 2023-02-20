import styles from 'styles/social.module.sass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

export default function Social() {
  return (
    <ul className={styles.list}>
      <li>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  )
}