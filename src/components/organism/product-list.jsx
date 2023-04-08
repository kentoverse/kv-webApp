




export default function ProductList ( products ) {


    const { products } = useProductContext();

  if (products.length === 0) return <h3>No Product Yet</h3>;

  
    return (
      <>

<div className={`grid grid-cols-[${cols}] md:grid-cols-[${cols + 3}] gap-4 place-items-center h-screen`}>
        {products.map((product) => (
      
            <CardProduct
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              href={product.href} 
            />
        
        ))}
      </div>
      
      
      
      </>
    )
  }
  
  