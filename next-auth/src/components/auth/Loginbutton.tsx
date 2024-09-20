"use client"

import { useRouter } from "next/navigation";


export default function Loginbutton({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    const onclick = () => {
        router.push("/auth/login");
    }

    return (
        <div>
            <span onClick={onclick}>
                {children}
            </span>
        </div>
    )
}
