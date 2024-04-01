import { JSX } from 'solid-js'
import style from './input.module.scss'

export default function Input(props: JSX.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} class={props.class ? `${style.input} ${props.class}` : style.input} />
}
