
function ProductCard(props) {

  const handleBuy = () => {
    // acceder al estado
    const clone = JSON.parse(JSON.stringify(props.allProducts))

    // buscar el elemento que tengo que comprar
    // hacer el cambio del documento
    clone[props.index].isPurchased = true

    // linea de abajo para hacer el toggle
    // clone[props.index].isPurchased = !clone[props.index].isPurchased

    // actualizar el estado
    props.setAllProducts(clone)
  }

  return (
    <div className="product-card" >
      <h3>{props.eachProduct.name}</h3>
      <p>{props.eachProduct.price}€</p>
      <p>{props.eachProduct.isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  )
}

export default ProductCard