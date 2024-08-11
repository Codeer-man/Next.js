
import Receipt from '.'


async function fetchOfReceiptList() {
    try {
        const receipe = await fetch('https://dummyjson.com/recipes')
        const json = await receipe.json()

        return json?.recipes
    } catch (error) {
      console.log("Here is the error")
    }
}

export default async function ReceiptList() {
 
    const foodRecpie = await fetchOfReceiptList()

    return (
    <div>
        <Receipt foodRecpie={foodRecpie} />
    </div>
  )
}
