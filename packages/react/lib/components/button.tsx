import '@khyonn/dst-style/css/components/button.css'

export default function Button(
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) {
  return <button {...props} className={props.className ? `khyonn-button ${props.className}` : 'khyonn-button'} />
}
