import React, { useState } from "react";

const initialImgItems = [
  "https://png.pngtree.com/thumb_back/fh260/background/20210814/pngtree-business-gradient-geometric-gray-square-abstract-simple-gray-background-image_759189.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20210811/pngtree-simple-rectangular-gray-background-image_759093.jpg",
  "https://files.123freevectors.com/wp-content/original/131247-abstract-dark-grey-polygonal-background-design.jpg",
  "https://images.unsplash.com/photo-1454117096348-e4abbeba002c?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
  "https://png.pngtree.com/background/20211215/original/pngtree-abstract-gradient-white-gray-three-dimensional-triangle-technology-business-background-picture-image_1453067.jpg",
  "https://motionarray.imgix.net/preview-33509CFka6iC1IY_0000.jpg?w=660&q=60&fit=max&auto=format",
  "https://png.pngtree.com/thumb_back/fh260/background/20201015/pngtree-white-polygonal-mosaic-triangular-background-abstract-light-gray-background-low-poly-image_418752.jpg",
  "https://static.vecteezy.com/system/resources/previews/006/045/135/original/abstract-modern-white-and-grey-chaotic-polygonal-background-free-vector.jpg"
];

const initialTitleItems = [
  "Quis autem vel",
  "Consectetur adipis",
  "Omnis iste",
  "At vero eos",
  "Excepteur sint",
  "Nam libero tempore",
  "Adipis autem",
  "Sint iste Bero"
];

const initialPriceItems = [
  "20$",
  "10$",
  "25$",
  "13$",
  "18$",
  "20$",
  "20$",
  "10$"
];

const HomePage = () => {
  const [imgItems, setImgItems] = useState(initialImgItems);
  const [titleItems, setTitleItems] = useState(initialTitleItems);
  const [priceItems, setPriceItems] = useState(initialPriceItems);

  const loadMoreItems = () => {
    setImgItems([...imgItems, ...initialImgItems]);
    setTitleItems([...titleItems, ...initialTitleItems]);
    setPriceItems([...priceItems, ...initialPriceItems]);
  };

  return (
    <div className="container mx-auto p-8 mt-0 ">
      <div className="bg-red-700 shadow-md rounded-lg overflow-hidden flex flex-col p-5 mb-20 text-white">
        <p>SHOP NOW WITH LOREM IPSUM AND SAVE 10% AT CHECKOUT WITH CODE: <a  className="text-yellow-300"href="">*YL2T5S79D*</a>  </p>
        <p className="text-sm text-gray-400">Offer valid until 0x/0x/0x0x.</p> 
      </div>
            <h2 className="text-3xl font-bold text-center mb-14 text-white">SHOP LOREM IPSUM</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {imgItems.map((img, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <img src={img} alt={titleItems[index]} className="w-full h-48 object-cover"/>
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl text-black font-semibold mb-2">{titleItems[index]}</h3>
              </div>
              <div className="flex justify-between items-end mt-auto mt-5">
                <p className="text-green-600 text-lg">{priceItems[index]}</p>
                <button className="bg-red-600 rounded-lg p-2 text-white">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-red-600 rounded-lg p-2 mt-10  text-white mb-10 p-3" onClick={loadMoreItems}>
          Load more items
        </button>
      </div>
      <p></p>
    </div>
  );
};

export default HomePage;
