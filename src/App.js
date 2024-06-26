import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product)=>(
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
        <img src={product.image} alt ={product.name}/>
        </a>
        <div className="product-info">
          <a href={`/products/${product.slug}`}>
          <p>{product.name}</p>
          </a>
        <p>
          <strong>${product.price}</strong>
        </p>
        <button>Add to cart</button>
    </div>
    </div>
    ))}
    </div>
  </main>
    </div>
  );
}

export default App;



//list products

//1)create product array
//2)add product images
//3)render products
//4)style products

