"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"


const navLink = [
    {name:"Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name:"Forgot Password", href:"/forgot-password"}
]

export default function AuthLayout({
    children,
}:{
    children: React.ReactNode
}){
    const pathname = usePathname()
    const isActive = pathname
    return (
        <div>
            {navLink.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                    <Link href={link.href} key={link.name}
                        className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                    >
                        {link.name}
                    </Link>
                )
            })}
            
        </div>

    )
}