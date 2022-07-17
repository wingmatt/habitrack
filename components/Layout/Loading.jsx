import { AiOutlineLoading } from "react-icons/ai";
import styles from "./Loading.module.css"

export default function Loading () {
  return <AiOutlineLoading className={styles.spinner} aria-label="Loading" />
}