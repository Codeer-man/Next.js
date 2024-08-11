
import React from 'react'

export default function Receipt({foodRecpie}) {
  
    console.log(foodRecpie.id)
    return (
    <div>
        {foodRecpie.map((food) => (
          <div>
            <p>{food.name}</p>
          </div>
        ))}
    </div>
  )
}
