import Link from 'next/link';
import Image from 'next/image';

// Static images import
import product1 from '/../my-app/src/components/assets/product1.png';
import product2 from '/../my-app/src/components/assets/product2.png';
import product3 from '/../my-app/src/components/assets/product3.png';
import product4 from '/../my-app/src/components/assets/product4.png';
import product5 from '/../my-app/src/components/assets/product5.png';
import product6 from '/../my-app/src/components/assets/product6.png';
import product7 from '/../my-app/src/components/assets/product7.png';
import product8 from '/../my-app/src/components/assets/product8.png';

// Map for product images
const productImages: { [key: string]: StaticImageData } = {
  '1': product1,
  '2': product2,
  '3': product3,
  '4': product4,
  '5': product5,
  '6': product6,
  '7': product7,
  '8': product8,
  '9': product1,
  '10': product2,
  '11': product3,
  '12': product4,
  '13': product5,
  '14': product6,
  '15': product7,
  '16': product8,
  '17': product1,
  '18': product2,
  '19': product3,
  '20': product4,
  '21': product5,
  '22': product6,
  '23': product7,
  '24': product8,
  '25': product1,
  '26': product2,
  '27': product3,
  '28': product4,
  '29': product5,
  '30': product6,
  

};

const Page = async ({ params }: { params: { products: string } }) => {
  try {
    // Fetch product data
    const fetchdata = await fetch(`https://dummyjson.com/products/${params.products}`);
    const response = await fetchdata.json();

    // Check if response contains valid data
    if (!response || response.error) {
      return <div>Product not found.</div>;
    }

    // Get the corresponding image from the map
    const productImage = productImages[params.products] || product1; // Fallback to product1 if not found

    return (
      <>
        <div className="w-1/2 grid justify-center items-center p-4 pb-5 gap-6 sm:p-10 float-start">
          <Image
            src={productImage}
            width={350}
            height={350}
            alt="product image"
            className="bg-slate-200"
          />
        </div>
        <div className="w-1/2 grid items-center p-4 pb-5 gap-6 sm:p-10 float-start">
          <p className="font-bold">Product Id: {response.id}</p>
          <h3>
            <span className="font-bold">Title:</span> {response.title}
          </h3>
          <p>
            <span className="font-bold">Category:</span> {response.category}
          </p>
          <p>
            <span className="font-bold">Description:</span> {response.description}
          </p>
          <p>
            <span className="font-bold">Price:</span> ${response.price}
          </p>
          <p>
            <span className="font-bold">Brand:</span> {response.brand}
          </p>
          <Link href="/cart" className="bg-black text-white p-2 w-40 text-center">
            Add to Cart
          </Link>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error fetching product:', error);
    return <div>Failed to load product data. Please try again later.</div>;
  }
};

export default Page;
