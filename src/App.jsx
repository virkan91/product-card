import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Food from "./pages/food/Food";
import Clothes from "./pages/clothes/Clothes";
import Electronics from "./pages/electronics/Electronics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Food />,
        },
        {
          path: "clothes",
          element: <Clothes />,
        },
        {
          path: "electronics",
          element: <Electronics />,
        },
      ],
    },
  ]);


  const clothes = [
    {
      id: 1,
      category: "",
      name: "Jacket Deefo",
      img: "https://img.freepik.com/premium-photo/women-s-winter-jacket-black-white-background_326533-2852.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1200,
    },
    {
      id: 2,
      category: "shirt",
      name: "Black shirt",
      img: "https://img.freepik.com/free-psd/isolated-black-t-shirt-opened_125540-1283.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 2200,
    },
    {
      id: 3,
      category: "shirt",
      name: "White shirt",
      img: "https://img.freepik.com/free-psd/isolated-white-t-shirt-with-hanger_125540-1304.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1500,
    },
    {
      id: 4,
      category: "shirt",
      name: "Mockup 2",
      img: "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3200,
    },
    {
      id: 5,
      category: "shirt",
      name: "Mockup shirt",
      img: "https://img.freepik.com/free-vector/simple-music-lover-t-shirt_742173-5177.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1100,
    },
    {
      id: 6,
      category: "jacket",
      name: "Jacket Pooty",
      img: "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745028.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 4100,
    },
    {
      id: 7,
      category: "sneakers",
      name: "Gray sneakers",
      img: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=740&t=st=1702639294~exp=1702639894~hmac=a6b8a81f354037f906359975ddc398c093ac84e4cc90328ab512df19f1235d0b",
      price: 2100,
    },
    {
      id: 8,
      category: "sneakers",
      name: "Blue sneakers",
      img: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3400,
    },
    {
      id: 9,
      category: "sneakers",
      name: "Black sneakers",
      img: "https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?w=740&t=st=1702639409~exp=1702640009~hmac=4130be327468349784f61cb38da2ab549b44421ac18a4413979d00f67aa8f4bb",
      price: 4100,
    },
    {
      id: 10,
      category: "",
      name: "Jacket Deefo",
      img: "https://img.freepik.com/premium-photo/women-s-winter-jacket-black-white-background_326533-2852.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1200,
    },
    {
      id: 11,
      category: "shirt",
      name: "White shirt",
      img: "https://img.freepik.com/free-psd/isolated-white-t-shirt-with-hanger_125540-1304.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1500,
    },
    {
      id: 12,
      category: "shirt",
      name: "Black shirt",
      img: "https://img.freepik.com/free-psd/isolated-black-t-shirt-opened_125540-1283.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 2200,
    },
    {
      id: 13,
      category: "shirt",
      name: "White shirt",
      img: "https://img.freepik.com/free-psd/isolated-white-t-shirt-with-hanger_125540-1304.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1500,
    },
    {
      id: 14,
      category: "shirt",
      name: "Mockup 2",
      img: "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3200,
    },
    {
      id: 15,
      category: "shirt",
      name: "Mockup shirt",
      img: "https://img.freepik.com/free-vector/simple-music-lover-t-shirt_742173-5177.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1100,
    },
    {
      id: 16,
      category: "jacket",
      name: "Jacket Pooty",
      img: "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745028.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 4100,
    },
    {
      id: 17,
      category: "sneakers",
      name: "Gray sneakers",

      img: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=740&t=st=1702639294~exp=1702639894~hmac=a6b8a81f354037f906359975ddc398c093ac84e4cc90328ab512df19f1235d0b",
      price: 2100,
    },
    {
      id: 18,
      category: "sneakers",
      name: "Blue sneakers",
      img: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3400,
    },
    {
      id: 19,
      category: "sneakers",
      name: "Black sneakers",
      img: "https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?w=740&t=st=1702639409~exp=1702640009~hmac=4130be327468349784f61cb38da2ab549b44421ac18a4413979d00f67aa8f4bb",
      price: 4100,
    },
    {
      id: 21,
      category: "",
      name: "Jacket Deefo",
      img: "https://img.freepik.com/premium-photo/women-s-winter-jacket-black-white-background_326533-2852.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1200,
    },
    {
      id: 20,
      category: "shirt",
      name: "Black shirt",
      img: "https://img.freepik.com/free-psd/isolated-black-t-shirt-opened_125540-1283.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 2200,
    },
    {
      id: 23,
      category: "shirt",
      name: "White shirt",
      img: "https://img.freepik.com/free-psd/isolated-white-t-shirt-with-hanger_125540-1304.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1500,
    },
    {
      id: 24,
      category: "shirt",
      name: "Mockup 2",
      img: "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3200,
    },
    {
      id: 25,
      category: "shirt",
      name: "Mockup shirt",
      img: "https://img.freepik.com/free-vector/simple-music-lover-t-shirt_742173-5177.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1100,
    },
    {
      id: 26,
      category: "jacket",
      name: "Jacket Pooty",
      img: "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745028.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 4100,
    },
    {
      id: 27,
      category: "sneakers",
      name: "Gray sneakers",
      img: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=740&t=st=1702639294~exp=1702639894~hmac=a6b8a81f354037f906359975ddc398c093ac84e4cc90328ab512df19f1235d0b",
      price: 2100,
    },
    {
      id: 28,
      category: "sneakers",
      name: "Blue sneakers",
      img: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3400,
    },
    {
      id: 29,
      category: "sneakers",
      name: "Black sneakers",
      img: "https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?w=740&t=st=1702639409~exp=1702640009~hmac=4130be327468349784f61cb38da2ab549b44421ac18a4413979d00f67aa8f4bb",
      price: 4100,
    },
    {
      id: 30,
      category: "",
      name: "Jacket Deefo",
      img: "https://img.freepik.com/premium-photo/women-s-winter-jacket-black-white-background_326533-2852.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1200,
    },
    {
      id: 31,
      category: "shirt",
      name: "White shirt",
      img: "https://img.freepik.com/free-psd/isolated-white-t-shirt-with-hanger_125540-1304.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1500,
    },
    {
      id: 32,
      category: "shirt",
      name: "Black shirt",
      img: "https://img.freepik.com/free-psd/isolated-black-t-shirt-opened_125540-1283.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 2200,
    },
    {
      id: 33,
      category: "shirt",
      name: "White shirt",
      img: "https://img.freepik.com/free-psd/isolated-white-t-shirt-with-hanger_125540-1304.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1500,
    },
    {
      id: 34,
      category: "shirt",
      name: "Mockup 2",

      img: "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3200,
    },
    {
      id: 35,
      category: "shirt",
      name: "Mockup shirt",
      img: "https://img.freepik.com/free-vector/simple-music-lover-t-shirt_742173-5177.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1100,
    },
    {
      id: 36,
      category: "jacket",
      name: "Jacket Pooty",
      img: "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745028.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 4100,
    },
    {
      id: 37,
      category: "sneakers",
      name: "Gray sneakers",
      img: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=740&t=st=1702639294~exp=1702639894~hmac=a6b8a81f354037f906359975ddc398c093ac84e4cc90328ab512df19f1235d0b",
      price: 2100,
    },
    {
      id: 38,
      category: "sneakers",
      name: "Blue sneakers",
      img: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3400,
    },
    {
      id: 39,
      category: "sneakers",
      name: "Black sneakers",
      img: "https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?w=740&t=st=1702639409~exp=1702640009~hmac=4130be327468349784f61cb38da2ab549b44421ac18a4413979d00f67aa8f4bb",
      price: 4100,
    },
  ];

  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
