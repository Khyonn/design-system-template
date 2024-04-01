import { JSX } from 'solid-js'
import '@khyonn/dst-style/css/components/button.css'

export default function Button(props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} class={props.class ? `khyonn-button ${props.class}` : 'khyonn-button'} />
}
