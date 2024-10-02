"use client";

import React, { useContext } from "react";
import { StateContext } from "../utils/context";
import NavLink from "./navLink";
import Link from "next/link";
import {CgMenuGridO} from "react-icons/cg"
import {RiCloseCircleFill} from "react-icons/ri"

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  { title: "Our Story", href: "/ourStory" },
  { title: "Communities", href: "/communities" },
  { title: "Milestones", href: "/milestones" },
];

const NavBar = () => {
  const { state} = useContext(StateContext);
  const { navOpen } = state;
  


  return (
    <nav className="md:w-[70%] flex justify-center">
      <NavBarLinks /> 
      
      {navOpen ? <NavBody /> : ""}
    </nav>
  );
};

export default NavBar;

// OTHER COMPONENTS UNDER THE NAVBAR

const NavBarLinks = () => {
  const { state, dispatch } = useContext(StateContext);
  const { navOpen } = state;
  const openNav = () => {
    dispatch({
      type: "toggleNav",
      payload: !navOpen,
    });
  };

  return (
    <div className="hidden md:flex">
        <ul>
          {
            navItems.map(({title, href}, index) =>(
              <Link key={index} href={href} className="text-sm mx-3">{title}</Link>
            ))
          }
        </ul>
    </div>
  );
};

const NavBody = () => {
  const { dispatch, state } = useContext(StateContext);
  const { navOpen } = state;
  const openNav = () => {
    dispatch({
      type: "toggleNav",
      payload: !navOpen,
    });
  };


  
    return (
    <ul className="w-[100%] fixed md:right-[] md:hidden rounded-[4px] h-[100vh] right-0 flex justify-between p-4 z-50 top-0 bg-black text-white">
      <div className="">
        {navItems.map(({ title, href }, index) => (
          <NavLink key={index} title={title} href={href} />
        ))}
      </div>
      <button onClick={openNav} className="flex items-start"><RiCloseCircleFill className="text-[1.5rem] mt-[.5em]"/></button>
    </ul>
  );
};

export const OpenMenu = () => {
  const { dispatch, state } = useContext(StateContext);
  const { navOpen } = state;
  const openNav = () => {
    dispatch({
      type: "toggleNav",
      payload: !navOpen,
    });
  };
  return (
    <button
      className="md:hidden"
      onClick={openNav}
    >
      <CgMenuGridO className="text-[1.5rem]" />
    </button>
  );
};
