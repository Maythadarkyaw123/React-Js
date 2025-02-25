function ProductList(){
    const products = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Phone", price: 800 },
      ];

      const myproducts = products.map(
        //becareful of products (whole array) and product (individual array)
        product => <li key={product.id}>{product.name} - {product.price}</li> 
      );


      return <ul>{myproducts}</ul>

}
export default ProductList;