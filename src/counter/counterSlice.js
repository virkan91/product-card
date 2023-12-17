import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      category: "hamberger",
      name: "Hamburger Recipe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyGT5EZzza2VqV48ajAa9RxaQ6iILD76NvA&usqp=CAU",
      price: 500,
      type: "food",
    },
    {
      id: 2,
      category: "hamberger",
      name: "Air Fryer Hamburgers",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwgeDtduqcp1fNnHZelrvLyMt9IdrtmzJZg&usqp=CAU",
      price: 450,
      type: "food",
    },
    {
      id: 3,
      category: "hamberger",
      name: "Hamberger",
      img: "https://img.freepik.com/free-photo/delicious-burger_144627-17545.jpg?w=740&t=st=1702637537~exp=1702638137~hmac=35e1f3ed8f2f3b65622e2f7ecd7b9fb446c7d4784b88dbc7daa3e4eedc7c6004",
      price: 470,
      type: "food",
    },
    {
      id: 4,
      category: "hamberger",
      name: "Juiciest Hamburgers Ever",
      img: "https://img.freepik.com/premium-photo/classic-burger-cheeseburger-close-up-white-background_74906-3442.jpg?w=740",
      price: 370,
      type: "food",
    },
    {
      id: 5,
      category: "hamberger",
      name: "Perfect Hamburger Recipe",
      img: "https://img.freepik.com/free-photo/delicious-burguer-isolated-white-background_125540-3368.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 430,
      type: "food",
    },
    {
      id: 6,
      category: "pizza",
      name: "Peppers Pizza",
      img: "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 270,
      type: "food",
    },
    {
      id: 7,
      category: "pizza",
      name: "Crust pie pizza",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 250,
      type: "food",
    },
    {
      id: 8,
      category: "pizza",
      name: "Pizza Brava",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 510,
      type: "food",
    },
    {
      id: 9,
      category: "pizza",
      name: "La Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 470,
      type: "food",
    },
    {
      id: 10,
      category: "hamberger",
      name: "Mario HMB",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPUYCD6ZseGn01NVmAtpLae1vxA-B1EMKWg&usqp=CAU",
      price: 390,
      type: "food",
    },
    {
      id: 11,
      category: "pizza",
      name: "Lava Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 240,
      type: "food",
    },

    {
      id: 12,
      category: "hamberger",
      name: "Hamburger Recipe",
      img: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9018.jpg?w=740&t=st=1702637234~exp=1702637834~hmac=6a991b5ba18c5aa562550fbb54600d51026422bd50456fab25ceb94969e42512",
      price: 500,
      type: "food",
    },
    {
      id: 13,
      category: "hamberger",
      name: "Air Fryer Hamburgers",
      img: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9025.jpg?w=740&t=st=1702637483~exp=1702638083~hmac=389733f078255a0bc8f4d3ed016da50a6f39e734a989f997e6cc5c0f25d02dd1",
      price: 450,
      type: "food",
    },
    {
      id: 14,
      category: "hamberger",
      name: "Hamberger",
      img: "https://img.freepik.com/free-photo/delicious-burger_144627-17545.jpg?w=740&t=st=1702637537~exp=1702638137~hmac=35e1f3ed8f2f3b65622e2f7ecd7b9fb446c7d4784b88dbc7daa3e4eedc7c6004",
      price: 470,
      type: "food",
    },
    {
      id: 15,
      category: "hamberger",
      name: "Juiciest Hamburgers Ever",
      ime: "https://img.freepik.com/premium-photo/classic-burger-cheeseburger-close-up-white-background_74906-3442.jpg?w=740",
      price: 370,
      type: "food",
    },
    {
      id: 16,
      category: "hamberger",
      name: "Perfect Hamburger Recipe",
      img: "https://img.freepik.com/free-photo/delicious-burguer-isolated-white-background_125540-3368.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 430,
      type: "food",
    },
    {
      id: 17,
      category: "pizza",
      name: "Peppers Pizza",
      img: "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 270,
      type: "food",
    },
    {
      id: 18,
      category: "pizza",
      name: "Crust pie pizza",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 250,
      type: "food",
    },
    {
      id: 19,
      category: "pizza",
      name: "Pizza Brava",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 510,
      type: "food",
    },
    {
      id: 20,
      category: "pizza",
      name: "La Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 470,
      type: "food",
    },
    {
      id: 21,
      category: "pizza",
      name: "Mario Pizza",
      img: "https://img.freepik.com/premium-psd/pizza-with-red-sauce-basil-leaves-transparent-background_927015-986.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 390,
      type: "food",
    },
    {
      id: 22,
      category: "pizza",
      name: "Lava Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 240,
      type: "food",
    },
    {
      id: 23,
      category: "hamberger",
      name: "Hamburger Recipe",
      img: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9018.jpg?w=740&t=st=1702637234~exp=1702637834~hmac=6a991b5ba18c5aa562550fbb54600d51026422bd50456fab25ceb94969e42512",
      price: 500,
      type: "food",
    },
    {
      id: 24,
      category: "hamberger",
      name: "Air Fryer Hamburgers",
      img: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9025.jpg?w=740&t=st=1702637483~exp=1702638083~hmac=389733f078255a0bc8f4d3ed016da50a6f39e734a989f997e6cc5c0f25d02dd1",
      price: 450,
      type: "food",
    },
    {
      id: 25,
      category: "hamberger",
      name: "Hamberger",
      img: "https://img.freepik.com/free-photo/delicious-burger_144627-17545.jpg?w=740&t=st=1702637537~exp=1702638137~hmac=35e1f3ed8f2f3b65622e2f7ecd7b9fb446c7d4784b88dbc7daa3e4eedc7c6004",
      price: 470,
      type: "food",
    },
    {
      id: 26,
      category: "hamberger",
      name: "Juiciest Hamburgers Ever",
      ime: "https://img.freepik.com/premium-photo/classic-burger-cheeseburger-close-up-white-background_74906-3442.jpg?w=740",
      price: 370,
      type: "food",
    },
    {
      id: 27,
      category: "hamberger",
      name: "Perfect Hamburger Recipe",
      img: "https://img.freepik.com/free-photo/delicious-burguer-isolated-white-background_125540-3368.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 430,
      type: "food",
    },
    {
      id: 28,
      category: "pizza",
      name: "Peppers Pizza",
      img: "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 270,
      type: "food",
    },
    {
      id: 29,
      category: "pizza",
      name: "Crust pie pizza",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 250,
      type: "food",
    },
    {
      id: 30,
      category: "pizza",
      name: "Pizza Brava",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 510,
      type: "food",
    },
    {
      id: 31,
      category: "pizza",
      name: "La Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 470,
      type: "food",
    },
    {
      id: 32,
      category: "pizza",
      name: "Mario Pizza",
      img: "https://img.freepik.com/premium-psd/pizza-with-red-sauce-basil-leaves-transparent-background_927015-986.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 390,
      type: "food",
    },
    {
      id: 33,
      category: "pizza",
      name: "Lava Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 240,
      type: "food",
    },

    {
      id: 34,
      category: "hamberger",
      name: "Hamburger Recipe",
      img: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9018.jpg?w=740&t=st=1702637234~exp=1702637834~hmac=6a991b5ba18c5aa562550fbb54600d51026422bd50456fab25ceb94969e42512",
      price: 500,
      type: "food",
    },
    {
      id: 35,
      category: "hamberger",
      name: "Air Fryer Hamburgers",
      img: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9025.jpg?w=740&t=st=1702637483~exp=1702638083~hmac=389733f078255a0bc8f4d3ed016da50a6f39e734a989f997e6cc5c0f25d02dd1",
      price: 450,
      type: "food",
    },
    {
      id: 36,
      category: "hamberger",
      name: "Hamberger",
      img: "https://img.freepik.com/free-photo/delicious-burger_144627-17545.jpg?w=740&t=st=1702637537~exp=1702638137~hmac=35e1f3ed8f2f3b65622e2f7ecd7b9fb446c7d4784b88dbc7daa3e4eedc7c6004",
      price: 470,
      type: "food",
    },
    {
      id: 37,
      category: "hamberger",
      name: "Juiciest Hamburgers Ever",
      ime: "https://img.freepik.com/premium-photo/classic-burger-cheeseburger-close-up-white-background_74906-3442.jpg?w=740",
      price: 370,
      type: "food",
    },
    {
      id: 38,
      category: "hamberger",
      name: "Perfect Hamburger Recipe",
      img: "https://img.freepik.com/free-photo/delicious-burguer-isolated-white-background_125540-3368.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 430,
      type: "food",
    },
    {
      id: 39,
      category: "pizza",
      name: "Crust pie pizza",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 250,
      type: "food",
    },
    {
      id: 40,
      category: "pizza",
      name: "Pizza Brava",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 510,
      type: "food",
    },
    {
      id: 41,
      category: "pizza",
      name: "La Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 470,
      type: "food",
    },
    {
      id: 42,
      category: "pizza",
      name: "Mario Pizza",
      img: "https://img.freepik.com/premium-psd/pizza-with-red-sauce-basil-leaves-transparent-background_927015-986.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 390,
      type: "food",
    },
    {
      id: 43,
      category: "pizza",
      name: "Lava Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 240,
      type: "food",
    },
    {
      id: 44,
      category: "pizza",
      name: "Peppers Pizza",
      img: "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 270,
      type: "food",
    },
    //

    {
      id: 49,
      category: "shirt",
      name: "Mockup shirt",
      img: "https://img.freepik.com/free-vector/simple-music-lover-t-shirt_742173-5177.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1100,
      type: "clothes",
    },
    {
      id: 50,
      category: "jacket",
      name: "Jacket Pooty",
      img: "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745028.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 4100,
      type: "clothes",
    },
    {
      id: 51,
      category: "sneakers",
      name: "Gray sneakers",
      img: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=740&t=st=1702639294~exp=1702639894~hmac=a6b8a81f354037f906359975ddc398c093ac84e4cc90328ab512df19f1235d0b",
      price: 2100,
      type: "clothes",
    },
    {
      id: 52,
      category: "sneakers",
      name: "Blue sneakers",
      img: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3400,
      type: "clothes",
    },
    {
      id: 53,
      category: "sneakers",
      name: "Black sneakers",
      img: "https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?w=740&t=st=1702639409~exp=1702640009~hmac=4130be327468349784f61cb38da2ab549b44421ac18a4413979d00f67aa8f4bb",
      price: 4100,
      type: "clothes",
    },
    {
      id: 54,
      category: "",
      name: "Jacket Deefo",
      img: "https://img.freepik.com/premium-photo/women-s-winter-jacket-black-white-background_326533-2852.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1200,
      type: "clothes",
    },

    {
      id: 58,
      category: "shirt",
      name: "Mockup 2",
      img: "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3200,
      type: "clothes",
    },
    {
      id: 45,
      category: "shirt",
      name: "Jacket Deefo",
      img: "https://img.freepik.com/premium-photo/women-s-winter-jacket-black-white-background_326533-2852.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1200,
      type: "clothes",
    },
    {
      id: 46,
      category: "shirt",
      name: "Black shirt",
      img: "https://img.freepik.com/free-psd/isolated-black-t-shirt-opened_125540-1283.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 2200,
      type: "clothes",
    },
    {
      id: 47,
      category: "shirt",
      name: "White shirt",
      img: "https://img.freepik.com/free-psd/isolated-white-t-shirt-with-hanger_125540-1304.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1500,
      type: "clothes",
    },
    {
      id: 56,
      category: "shirt",
      name: "Black shirt",
      img: "https://img.freepik.com/free-psd/isolated-black-t-shirt-opened_125540-1283.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 2200,
      type: "clothes",
    },
    {
      id: 48,
      category: "shirt",
      name: "Mockup 2",
      img: "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3200,
      type: "clothes",
    },
    {
      id: 57,
      category: "shirt",
      name: "White shirt",
      img: "https://img.freepik.com/free-psd/isolated-white-t-shirt-with-hanger_125540-1304.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1500,
      type: "clothes",
    },
    {
      id: 59,
      category: "shirt",
      name: "Mockup shirt",
      img: "https://img.freepik.com/free-vector/simple-music-lover-t-shirt_742173-5177.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1100,
      type: "clothes",
    },
    {
      id: 60,
      category: "jacket",
      name: "Jacket Pooty",
      img: "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745028.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 4100,
      type: "clothes",
    },
    {
      id: 61,
      category: "sneakers",
      name: "Gray sneakers",

      img: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=740&t=st=1702639294~exp=1702639894~hmac=a6b8a81f354037f906359975ddc398c093ac84e4cc90328ab512df19f1235d0b",
      price: 2100,
      type: "clothes",
    },
    {
      id: 62,
      category: "sneakers",
      name: "Blue sneakers",
      img: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3400,
      type: "clothes",
    },
    {
      id: 63,
      category: "sneakers",
      name: "Black sneakers",
      img: "https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?w=740&t=st=1702639409~exp=1702640009~hmac=4130be327468349784f61cb38da2ab549b44421ac18a4413979d00f67aa8f4bb",
      price: 4100,
      type: "clothes",
    },
    {
      id: 64,
      category: "",
      name: "Jacket Deefo",
      img: "https://img.freepik.com/premium-photo/women-s-winter-jacket-black-white-background_326533-2852.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1200,
      type: "clothes",
    },
    {
      id: 65,
      category: "shirt",
      name: "Black shirt",
      img: "https://img.freepik.com/free-psd/isolated-black-t-shirt-opened_125540-1283.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 2200,
      type: "clothes",
    },
    {
      id: 66,
      category: "shirt",
      name: "White shirt",
      img: "https://img.freepik.com/free-psd/isolated-white-t-shirt-with-hanger_125540-1304.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1500,
      type: "clothes",
    },
    {
      id: 67,
      category: "shirt",
      name: "Mockup 2",
      img: "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3200,
      type: "clothes",
    },
    {
      id: 68,
      category: "shirt",
      name: "Mockup shirt",
      img: "https://img.freepik.com/free-vector/simple-music-lover-t-shirt_742173-5177.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1100,
      type: "clothes",
    },
    {
      id: 69,
      category: "jacket",
      name: "Jacket Pooty",
      img: "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745028.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 4100,
      type: "clothes",
    },
    {
      id: 70,
      category: "sneakers",
      name: "Gray sneakers",
      img: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=740&t=st=1702639294~exp=1702639894~hmac=a6b8a81f354037f906359975ddc398c093ac84e4cc90328ab512df19f1235d0b",
      price: 2100,
      type: "clothes",
    },
    {
      id: 71,
      category: "sneakers",
      name: "Blue sneakers",
      img: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3400,
      type: "clothes",
    },
    {
      id: 72,
      category: "sneakers",
      name: "Black sneakers",
      img: "https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?w=740&t=st=1702639409~exp=1702640009~hmac=4130be327468349784f61cb38da2ab549b44421ac18a4413979d00f67aa8f4bb",
      price: 4100,
      type: "clothes",
    },
    {
      id: 73,
      category: "",
      name: "Jacket Deefo",
      img: "https://img.freepik.com/premium-photo/women-s-winter-jacket-black-white-background_326533-2852.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1200,
      type: "clothes",
    },
    {
      id: 74,
      category: "shirt",
      name: "White shirt",
      img: "https://img.freepik.com/free-psd/isolated-white-t-shirt-with-hanger_125540-1304.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1500,
      type: "clothes",
    },
    {
      id: 75,
      category: "shirt",
      name: "Black shirt",
      img: "https://img.freepik.com/free-psd/isolated-black-t-shirt-opened_125540-1283.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 2200,
      type: "clothes",
    },
    {
      id: 76,
      category: "shirt",
      name: "White shirt",
      img: "https://img.freepik.com/free-psd/isolated-white-t-shirt-with-hanger_125540-1304.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1500,
      type: "clothes",
    },
    {
      id: 77,
      category: "shirt",
      name: "Mockup 2",

      img: "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3200,
      type: "clothes",
    },
    {
      id: 78,
      category: "shirt",
      name: "Mockup shirt",
      img: "https://img.freepik.com/free-vector/simple-music-lover-t-shirt_742173-5177.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 1100,
      type: "clothes",
    },
    {
      id: 79,
      category: "jacket",
      name: "Jacket Pooty",
      img: "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745028.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 4100,
      type: "clothes",
    },
    {
      id: 80,
      category: "sneakers",
      name: "Gray sneakers",
      img: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=740&t=st=1702639294~exp=1702639894~hmac=a6b8a81f354037f906359975ddc398c093ac84e4cc90328ab512df19f1235d0b",
      price: 2100,
      type: "clothes",
    },
    {
      id: 81,
      category: "sneakers",
      name: "Blue sneakers",
      img: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=sph",
      price: 3400,
      type: "clothes",
    },
    {
      id: 82,
      category: "sneakers",
      name: "Black sneakers",
      img: "https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?w=740&t=st=1702639409~exp=1702640009~hmac=4130be327468349784f61cb38da2ab549b44421ac18a4413979d00f67aa8f4bb",
      price: 4100,
      type: "clothes",
    },
    // electronic
    {
      id: 83,
      category: "phone",
      name: "Samsung A3",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ru/sm-r510nzaacis/gallery/ru-galaxy-buds2-pro-r510-sm-r510nzaacis-533553278?$1300_1038_PNG$",
      price: 4200,
      type: "electronics",
    },
    {
      id: 84,
      category: "phone",
      name: "Samsung A3",
      img: "https://images.samsung.com/is/image/samsung/assets/ru/smartphones/galaxy-s23-fe/gnb/GNB_R11_168x136_mo.png?$168_136_PNG$",
      price: 4900,
      type: "electronics",
    },
    {
      id: 85,
      category: "phone",
      name: "Samsung A3",
      img: "https://img.mvideo.ru/Pdb/30056052b.jpg",
      price: 4000,
      type: "electronics",
    },
    {
      id: 86,
      category: "phone",
      name: "Samsung A3",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ru/sm-r510nzaacis/gallery/ru-galaxy-buds2-pro-r510-sm-r510nzaacis-533553278?$1300_1038_PNG$",
      price: 4200,
      type: "electronics",
    },
    {
      id: 87,
      category: "phone",
      name: "Samsung A3",
      img: "https://images.samsung.com/is/image/samsung/assets/ru/smartphones/galaxy-s23-fe/gnb/GNB_R11_168x136_mo.png?$168_136_PNG$",
      price: 4900,
      type: "electronics",
    },
    {
      id: 88,
      category: "phone",
      name: "Samsung A3",
      img: "https://img.mvideo.ru/Pdb/30056052b.jpg",
      price: 4000,
      type: "electronics",
    },
    {
      id: 89,
      category: "phone",
      name: "Samsung A3",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ru/sm-r510nzaacis/gallery/ru-galaxy-buds2-pro-r510-sm-r510nzaacis-533553278?$1300_1038_PNG$",
      price: 4200,
      type: "electronics",
    },
    {
      id: 90,
      category: "phone",
      name: "Samsung A3",
      img: "https://images.samsung.com/is/image/samsung/assets/ru/smartphones/galaxy-s23-fe/gnb/GNB_R11_168x136_mo.png?$168_136_PNG$",
      price: 4900,
      type: "electronics",
    },
    {
      id: 91,
      category: "phone",
      name: "Samsung A3",
      img: "https://img.mvideo.ru/Pdb/30056052b.jpg",
      price: 4000,
      type: "electronics",
    },
    {
      id: 92,
      category: "phone",
      name: "Samsung A3",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ru/sm-r510nzaacis/gallery/ru-galaxy-buds2-pro-r510-sm-r510nzaacis-533553278?$1300_1038_PNG$",
      price: 4200,
      type: "electronics",
    },
    {
      id: 93,
      category: "phone",
      name: "Samsung A3",
      img: "https://images.samsung.com/is/image/samsung/assets/ru/smartphones/galaxy-s23-fe/gnb/GNB_R11_168x136_mo.png?$168_136_PNG$",
      price: 4900,
      type: "electronics",
    },
    {
      id: 94,
      category: "phone",
      name: "Samsung A3",
      img: "https://img.mvideo.ru/Pdb/30056052b.jpg",
      price: 4000,
      type: "electronics",
    },
  ],
  cart: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload);
    },
    deleteItemOne: (state, action) => {
      state.cart = state.cart.filter((e, i) => i !== action.payload);
    },
    resetCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addToCart, deleteItem, deleteItemOne, resetCart } =
  counterSlice.actions;

export default counterSlice.reducer;
