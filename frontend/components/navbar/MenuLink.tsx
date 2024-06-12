"use client";

interface MenuLinkProps{
    label: string;
    onClick:()=>void;
    icon?:React.ReactNode;
}
const MenuLink:React.FC<MenuLinkProps> = ({label,onClick,icon}) => {
  return (
    <div onClick={onClick} className="px-5 py-4 cursor-pointer hover:bg-slate-200/80 duration-150">
      <div className="flex items-center gap-4">
        {icon} 
        {label}
      </div>
     
      
      </div>
  )
}

export default MenuLink