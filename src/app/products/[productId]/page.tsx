import { Metadata } from "next";

type Props = {
  params: Promise<{productId: string}>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    // 1) // const  id  = (await params).productId;
    // 1) // return { title: `Product ${id}` };

    // const title = await new Promise(resolve => {
    //     setTimeout(() => resolve(`iPhone ${id}`), 100);
    // });
    // return { title: `Product ${title}` };
    // In the real e-commerce website where you have a product catalogue, you can fetch prodcut details & set the title accordingly.
    // AS there is no API at the moment that why we are resolving the promise in 100 millisecs with some text.
    
    // The above 5 lines are from the course but it didnt work.
    // So below 4 lines I took from chatGPT.
    const { productId } = await params;
    const title = await Promise.resolve(`iPhone ${productId}`);
    console.log('metadata:', productId, title);
    return { title: `Product ${title}` };
  };

const ProductDetails = async ({ params} : Props ) => {
    const {productId} = await params;
    return (
      <h1>Product Details Page {productId}</h1>
    );
  };
  
  export default ProductDetails;

