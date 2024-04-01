import style from './input.module.scss'

export default function Input(
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
) {
  return <input {...props} className={props.className ? `${style.input} ${props.className}` : style.input} />
}
