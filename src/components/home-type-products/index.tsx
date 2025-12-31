import React, { useEffect, useState } from "react";
import { products } from "./fakeData"; 
import ProductCard from "../hot-products/productCard";
import { dataOptions, IOption } from "./homeTypeProducts.interface"
import { IProduct } from "./homeTypeProducts.interface";
import { useNavigate } from "react-router-dom";

const HomeTypeProducts = () => {
  const navigate = useNavigate();

  const [optionSelected, setOptionSelected] = useState<IOption>(dataOptions[0]);
  const [productData, setProductData] = useState<IProduct[]>([]);
    
  const getProducts = async () => {
      const url = `https://lapshop-be.onrender.com/api/product?page=1&limit=100`;
      handFileProducts(url);
    }
  
    const handFileProducts = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log("ketqua all products", result);

    // lấy hết sản phẩm (không chỉ isHot)
    setProductData(result.data);
  } catch (error: any) {
    console.error(error.message);
  }
};
  
    useEffect(() => {
        getProducts();
      }, []);


  //có 2 cách lọc dữ liệu
  //c1: filter /lọc trực tiếp ở mapping product
  //c2: tạo 1 state data chỉ chứa những category cần filter/lọc
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-6 mb-4 text-blue-800">Sản Phẩm Theo Danh Mục</h1>
      <div className="flex justify-center w-full">
        <div className="flex gap-2 shadow-md rounded-full p-1 w-fit border-red-100 border">
          {dataOptions.map((item) => (
            <div
              key={item._id}
              onClick={() => setOptionSelected(item)}
              className={`px-4 py-3 text-md font-semibold rounded-full cursor-pointer ${optionSelected._id === item._id ? "bg-blue-600 text-white" : "text-black bg-white"}`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-8">
        {productData
          .map((item: IProduct, index: number) => (
            <ProductCard key={index} item={item} />
          ))}
        {/* {data.map((item: IProduct, index: number) => (
            <ProductCard key={index} item={item} />
          ))} */}
      </div>
      <div onClick={() => {
        navigate("/products");
      }} className="m-auto mb-6 px-6 py-2 bg-white hover:bg-neutral-200 border border-blue-500
            cursor-pointer rounded-full text-blue-600 w-fit"> xem thêm sản phầm</div>
    </div>
  );
};

export default HomeTypeProducts;