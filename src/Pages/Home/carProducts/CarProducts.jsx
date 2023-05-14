import { useEffect, useState } from "react";
import ProductCard from "./productCard/ProductCard";


const CarProducts = () => {

    const [carProducts,setCarProducts] =useState([]);
    useEffect(()=>{
        fetch(`carProducts.json`)
        .then(res => res.json())
        .then(data => setCarProducts(data))
    },[])
  return (
    <div>
      <div className="text-center mt-32">
        <h4 className="text-xl font-bold text-error mb-5">Popular Products</h4>
        <h1 className="text-4xl font-bold mb-5">Browse Our Products</h1>
        <p className="mb-12">
        the majority have suffered alteration in some form, by injected humour, or randomised<br/> words which do not look even slightly believable. 
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {
          carProducts.map(product => <ProductCard
          key={product._id}
          product={product}
          ></ProductCard>)
        }
      </div>
    </div>
  );
};

export default CarProducts;
