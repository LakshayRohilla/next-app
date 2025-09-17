const ProductDetails = async ({params} : {params : Promise<{ productId: string}>}) => {
    const productId = (await params).productId;
    return (
            <h1>Product Details Page {productId}</h1>
    )
}

export default ProductDetails;

// const ProductDetails = async ({ params }) => {
//     const productId = (await params).productId;
//     return (
//       <h1>Product Details Page {productId}</h1>
//     );
//   };
  
//   export default ProductDetails;

// You do not need to await params. In your snippet params is a plain object (not a Promise), so await params is unnecessary. Example correction:

// const ProductDetails = async ({ params }) => {
//   const productId = params.productId;
//   return <h1>Product Details Page {productId}</h1>;
// };
// export default ProductDetails;