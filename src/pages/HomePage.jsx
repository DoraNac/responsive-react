import React, { useState } from "react";

const initialImgItems = [
  "https://img.freepik.com/premium-photo/red-wallpapers-that-will-make-you-want-red-wallpapers_889227-20197.jpg",
  "https://img.freepik.com/premium-vector/red-background-with-diamond-effect_23-2147618257.jpg",
  "https://w0.peakpx.com/wallpaper/214/775/HD-wallpaper-white-and-red-waves-red-aesthetic.jpg",
  "https://w0.peakpx.com/wallpaper/865/912/HD-wallpaper-red-wave-dark-blue-pink-flowers-plain-abstract-rose-maroon.jpg",
  "https://png.pngtree.com/thumb_back/fw800/background/20231221/pngtree-white-background-with-abstract-red-lines-image_15547147.png",
  "https://st4.depositphotos.com/24452164/26148/v/450/depositphotos_261486044-stock-illustration-red-and-white-diagonal-shiny.jpg",
  "https://png.pngtree.com/thumb_back/fw800/background/20231002/pngtree-vibrant-red-abstract-background-with-a-captivating-3d-effect-image_13538232.png",
  "https://t4.ftcdn.net/jpg/06/74/54/41/360_F_674544137_cYezvLnWGAU1HWrrSaGQBxE5pTzmjmEQ.jpg"
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
    <div className="container mx-auto p-12 mt-0 ">
      <div className="bg-red-700 shadow-md rounded-lg overflow-hidden flex flex-col p-5 mb-20 text-white">
        <p>SHOP NOW WITH LOREM IPSUM AND SAVE 10% AT CHECKOUT WITH CODE: <a  className="text-yellow-300"href="">*YL2T5S79D*</a>  </p>
        <p className="text-sm text-gray-400">Offer valid until 0x/0x/0x0x.</p> 
      </div>
            <h2 className="text-3xl font-bold text-center mb-14 text-white">SHOP LOREM IPSUM</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
        {imgItems.map((img, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <img src={img} alt={titleItems[index]} className="w-full h-48 object-cover"/>
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl text-black font-semibold mb-10">{titleItems[index]}      <hr /></h3>

              </div>
              <div className="flex justify-between items-end mt-auto mt-7">
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
