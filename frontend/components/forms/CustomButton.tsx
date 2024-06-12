
interface CustomButtonProps {
    label:string;
    onClick?:()=>void;
    className?:string;
    type:'submit' | 'reset' | 'button';
    icon?:React.ReactNode;
}

const CustomButton:React.FC <CustomButtonProps> = ({label,onClick,className,type,icon}) => {
  return (
    <button  onClick={onClick} type={type} className={`w-full py-4 bg-accent hover:bg-accent-hover rounded-xl duration-150 cursor-pointer  text-center  ${className}`}>
      <div className="flex items-center justify-center gap-2">
         {label}
    {icon && icon}
      </div>
   
    </button>
  )
}

export default CustomButton