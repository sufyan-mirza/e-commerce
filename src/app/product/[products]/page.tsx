import Link from 'next/link';
import Image from 'next/image';
import type { StaticImageData } from 'next/image'; // Import StaticImageData type
import Topbar2 from '@/components/topbar2';
import Header from '@/components/header';
import Brand from '@/components/brand';
import Bestproduct from '@/components/bestproduct';
import Footer from '@/components/footer';
// Static images import
import product1 from '../../../components/assets/product1.png';
import product2 from '../../../components/assets/product2.png';
import product3 from '../../../components/assets/product3.png';
import product4 from '../../../components/assets/product4.png';
import product5 from '../../../components/assets/product5.png';
import product6 from '../../../components/assets/product6.png';
import product7 from '../../../components/assets/product7.png';
import product8 from '../../../components/assets/product8.png';

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
      <div>
        <Topbar2/>
        <Header/>

        <div className="p-4 pb-5 gap-6 sm:p-10">
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap justify-center items-center gap-6">
    {/* Product Image */}
    <div className="w-full lg:w-3/6 xl:w-1/4 flex justify-center items-center">
      <Image
        src={productImage}
        width={350}
        height={50}
        alt="product image"
        className="bg-slate-200 h-96"
      />
    </div>

    {/* Product Details */}
    <div className="w-full lg:w-1/3 xl:w-1/2 flex flex-col items-start p-4 pb-5 gap-4 sm:p-10">
      <p className="font-bold text-lg lg:text-xl">Product Id: {response.id}</p>
      <h3 className="text-lg lg:text-xl">
        <span className="font-bold">Title:</span> {response.title}
      </h3>
      <p className="text-lg lg:text-xl">
        <span className="font-bold">Category:</span> {response.category}
      </p>
      <p className="text-lg lg:text-xl">
        <span className="font-bold">Description:</span> {response.description}
      </p>
      <p className="text-lg lg:text-xl">
        <span className="font-bold">Price:</span> ${response.price}
      </p>
      <p className="text-lg lg:text-xl">
        <span className="font-bold">Brand:</span> {response.brand}
      </p>
      <Link
        href="/cart"
        className="bg-black text-white p-3 w-full sm:w-48 text-center rounded hover:bg-gray-800"
      >
        Add to Cart
      </Link>
    </div>
  </div>
</div>



        <Bestproduct/>
        <Brand/>
        <Footer/>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error fetching product:', error);
    return <div>Failed to load product data. Please try again later.</div>;
  }
};

export default Page;
