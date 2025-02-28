import { useState } from "react"

function AddForm(props) {

  const [ nameInputValue, setNameInputValue ] = useState("")
  const [ priceInputValue, setPriceInputValue ] = useState(0)

  const handleNameInputChange = (event) => {
    console.log(event.target.value)
    setNameInputValue(event.target.value)
    // let valorDelCampo = event.target.value.toUpperCase() + "TROL"
    // if (valorDelCampo === "LOL") {
    //   valorDelCampo = "NO"
    // }
    // setNameInputValue(valorDelCampo)
  }

  const handlePriceChange = (event) => setPriceInputValue(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault() // elimar el comportamiento predeterminado de el formulario
    console.log("entregando el formulario")

    //1. necesitamos recopilar la data a crear
    const productorParaAñadir = {
      name: nameInputValue,
      price: priceInputValue,
      isPurchased: false // valor inicial
    }
    console.log(productorParaAñadir)

    //2. necesitamos actualizarlo en el estado
    const clone = [...props.allProducts]
    clone.push(productorParaAñadir)
    props.setAllProducts( clone )

    // lo mismo de arriba pero en una sola linea
    // props.setAllProducts( [...props.allProducts, productorParaAñadir] )

    //3. reiniciamos los campos
    setNameInputValue("")
    setPriceInputValue(0)

  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={handleNameInputChange} value={nameInputValue} type="text" name="name"/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input min={0} onChange={handlePriceChange} value={priceInputValue} type="number" name="price"/>
        </div>

        <button type="submit">Add</button>

      </form>

    </div>
  )
}

export default AddForm