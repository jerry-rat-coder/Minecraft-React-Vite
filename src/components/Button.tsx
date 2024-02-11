interface ButtonType {
  onClick: () => void
  color?: string
  title:string
  className?: string
}
const Button: React.FC<ButtonType> = ({
  onClick,
  color='sky',
  title,
  className=""
}) => {
  return ( 
    <button 
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }} 
      className={`p-4 outline-none hover:opacity-50 rounded-md bg-${color}-400 ${className}`} >{title}</button>
   );
}
 
export default Button;