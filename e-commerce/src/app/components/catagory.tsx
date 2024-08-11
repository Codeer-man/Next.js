'use client'

import { useState } from 'react'

export default function Catagory() {
  
  const [dropdown,setDropdown] = useState(false)
    return (
    <div>
        <button
            onClick={() => setDropdown((prev) => !prev)}
        >
            Catagory
        </button>
    </div>
  )
}
