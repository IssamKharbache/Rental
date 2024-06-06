
interface CustomButtonProps {
    label:string;
    onClick?:()=>void;
    className?:string;
    type:'submit' | 'reset' | 'button';
}

const CustomButton:React.FC <CustomButtonProps> = ({label,onClick,className,type}) => {
  return (
    <button  onClick={onClick} type={type} className={`w-full py-4 bg-accent hover:bg-accent-hover rounded-xl duration-150 cursor-pointer  text-center  ${className}`}>
    {label}
    </button>
  )
}

export default CustomButton