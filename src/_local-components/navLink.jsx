import React from "react";
import Link from "next/link";

const NavLink = ({ href, title, icon }) => {


  const Icon = ({icon}) =>{
    return(
      <div className="mx-2">
        {icon}
      </div>
    )
  }

  return (
    <Link href={href} className="">
      <div className="hover:text-neutral-600 text-[1.9rem] border-b-[1px] border-solid border-b-zinc-800 mb-3  p-3 flex  items-center">
        {title}
      </div>
    </Link>
  );
};

export default NavLink;
