"use client"

import { Card,CardContent,CardFooter,CardHeader } from "./card"

interface CardWrapperProps{
    children: React.ReactNode,
    headLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showsocial?: boolean,
}

export function CardWrapper({children,headLabel,backButtonHref,backButtonLabel,showsocial}:CardWrapperProps) {
  return (
    <Card className="w-[400px] shadow-md bg-white">
        {children}
    </Card>
  )
}
