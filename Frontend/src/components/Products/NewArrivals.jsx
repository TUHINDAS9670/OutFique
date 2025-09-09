import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import axios from "axios";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canscrollRight, setCanScrollRight] = useState(false);
  const [canscrollLeft, setCanScrollLeft] = useState(false);

 
  const[newArrivals,setNewArrivals]=useState([]);
  useEffect(()=>{
    const fetchNewArrivals=async()=>{
      try {
        const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`)
        setNewArrivals(response.data);
      } catch (error) {
        console.error(error);
        
      }
    }
    fetchNewArrivals();
  },[])
  const scroll=(direction)=>{
    const scrollAmount=direction==="left"? -300 : 300;   
    scrollRef.current.scrollBy({left:scrollAmount ,behaviour:"smooth"})
  }
  //update scroll buttons
  const updateScrollButtons=()=>{
    const container=scrollRef.current;
    if(container){
      const leftScroll=container.scrollLeft;
      const rightScrollable=container.scrollWidth>leftScroll+container.clientWidth;
      setCanScrollLeft(leftScroll>0);
      setCanScrollRight(rightScrollable);
    }
  }
  useEffect(()=>{
    const container=scrollRef.current;
    if(container){
      container.addEventListener("scroll",updateScrollButtons);
      updateScrollButtons();
      return ()=>container.removeEventListener("scroll",updateScrollButtons)
    }
  },[newArrivals]);
  return (
    <section className="px-4">
      <div className="container mx-auto text-center  mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway , freshly added to
          keep your wardobe on the cuting edge of fashion.
        </p>
        {/* scroll buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button onClick={()=>scroll("left")} disabled={!canscrollLeft} className={`p-2 rounded border bg-white text-black`}>
            <FiChevronLeft className="text-2xl" />
          </button>
          <button className="p-2 rounded border bg-white text-black">
            {" "}
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      {/* scrollable content */}
      <div ref={scrollRef}  className="container mx-auto overflow-x-scroll flex space-x-6 relative">
        {newArrivals.map((product) => (
          <div
            key={product.id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
  src={product.images?.[0]?.url || "/placeholder.jpg"}
  alt={product.images?.[0]?.altText || product.name}
  className="w-full h-[500px] object-cover rounded-lg"
/>

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md text-white">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">{product.price} </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
