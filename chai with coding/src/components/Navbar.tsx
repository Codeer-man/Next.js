"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from '@/lib/utils';
import Link from "next/link";



export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    
    

    return (
         <div
            className={cn("fixed top-10 inset-x-0 max-w-3xl mx-auto z-50", className)}>
            
            <Menu setActive={setActive}>
                <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                     
                </MenuItem>
                </Link>  
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="courses">All courses</HoveredLink>
                        <HoveredLink href="courses">Basic Music Thoery</HoveredLink>
                        <HoveredLink href="courses">Advance COmposition</HoveredLink>
                        <HoveredLink href="courses">Song writing</HoveredLink>
                        <HoveredLink href="courses">Music Productin</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact us">
                     
                </MenuItem>
            </Menu>
        </div> 
    )
}
