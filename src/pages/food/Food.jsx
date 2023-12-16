import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../counter/counterSlice";
import FoodCopmonent from "../../components/FoodCopmonent";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Food = () => {
  const dispatch = useDispatch();
  const foods = [
    {
      id: 1,
      category: "hamberger",
      name: "Hamburger Recipe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyGT5EZzza2VqV48ajAa9RxaQ6iILD76NvA&usqp=CAU",
      price: 500,
    },
    {
      id: 2,
      category: "hamberger",
      name: "Air Fryer Hamburgers",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwgeDtduqcp1fNnHZelrvLyMt9IdrtmzJZg&usqp=CAU",
      price: 450,
    },
    {
      id: 3,
      category: "hamberger",
      name: "Hamberger",
      img: "https://img.freepik.com/free-photo/delicious-burger_144627-17545.jpg?w=740&t=st=1702637537~exp=1702638137~hmac=35e1f3ed8f2f3b65622e2f7ecd7b9fb446c7d4784b88dbc7daa3e4eedc7c6004",
      price: 470,
    },
    {
      id: 4,
      category: "hamberger",
      name: "Juiciest Hamburgers Ever",
      img: "https://img.freepik.com/premium-photo/classic-burger-cheeseburger-close-up-white-background_74906-3442.jpg?w=740",
      price: 370,
    },
    {
      id: 5,
      category: "hamberger",
      name: "Perfect Hamburger Recipe",
      img: "https://img.freepik.com/free-photo/delicious-burguer-isolated-white-background_125540-3368.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 430,
    },
    {
      id: 6,
      category: "pizza",
      name: "Peppers Pizza",
      img: "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 270,
    },
    {
      id: 7,
      category: "pizza",
      name: "Crust pie pizza",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 250,
    },
    {
      id: 8,
      category: "pizza",
      name: "Pizza Brava",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 510,
    },
    {
      id: 9,
      category: "pizza",
      name: "La Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 470,
    },
    {
      id: 10,
      category: "hamberger",
      name: "Mario HMB",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPUYCD6ZseGn01NVmAtpLae1vxA-B1EMKWg&usqp=CAU",
      price: 390,
    },
    {
      id: 11,
      category: "pizza",
      name: "Lava Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 240,
    },

    {
      id: 12,
      category: "hamberger",
      name: "Hamburger Recipe",
      img: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9018.jpg?w=740&t=st=1702637234~exp=1702637834~hmac=6a991b5ba18c5aa562550fbb54600d51026422bd50456fab25ceb94969e42512",
      price: 500,
    },
    {
      id: 13,
      category: "hamberger",
      name: "Air Fryer Hamburgers",
      img: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9025.jpg?w=740&t=st=1702637483~exp=1702638083~hmac=389733f078255a0bc8f4d3ed016da50a6f39e734a989f997e6cc5c0f25d02dd1",
      price: 450,
    },
    {
      id: 14,
      category: "hamberger",
      name: "Hamberger",
      img: "https://img.freepik.com/free-photo/delicious-burger_144627-17545.jpg?w=740&t=st=1702637537~exp=1702638137~hmac=35e1f3ed8f2f3b65622e2f7ecd7b9fb446c7d4784b88dbc7daa3e4eedc7c6004",
      price: 470,
    },
    {
      id: 15,
      category: "hamberger",
      name: "Juiciest Hamburgers Ever",
      ime: "https://img.freepik.com/premium-photo/classic-burger-cheeseburger-close-up-white-background_74906-3442.jpg?w=740",
      price: 370,
    },
    {
      id: 16,
      category: "hamberger",
      name: "Perfect Hamburger Recipe",
      img: "https://img.freepik.com/free-photo/delicious-burguer-isolated-white-background_125540-3368.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 430,
    },
    {
      id: 17,
      category: "pizza",
      name: "Peppers Pizza",
      img: "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 270,
    },
    {
      id: 18,
      category: "pizza",
      name: "Crust pie pizza",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 250,
    },
    {
      id: 19,
      category: "pizza",
      name: "Pizza Brava",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 510,
    },
    {
      id: 20,
      category: "pizza",
      name: "La Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 470,
    },
    {
      id: 21,
      category: "pizza",
      name: "Mario Pizza",
      img: "https://img.freepik.com/premium-psd/pizza-with-red-sauce-basil-leaves-transparent-background_927015-986.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 390,
    },
    {
      id: 22,
      category: "pizza",
      name: "Lava Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 240,
    },
    {
      id: 23,
      category: "hamberger",
      name: "Hamburger Recipe",
      img: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9018.jpg?w=740&t=st=1702637234~exp=1702637834~hmac=6a991b5ba18c5aa562550fbb54600d51026422bd50456fab25ceb94969e42512",
      price: 500,
    },
    {
      id: 24,
      category: "hamberger",
      name: "Air Fryer Hamburgers",
      img: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9025.jpg?w=740&t=st=1702637483~exp=1702638083~hmac=389733f078255a0bc8f4d3ed016da50a6f39e734a989f997e6cc5c0f25d02dd1",
      price: 450,
    },
    {
      id: 25,
      category: "hamberger",
      name: "Hamberger",
      img: "https://img.freepik.com/free-photo/delicious-burger_144627-17545.jpg?w=740&t=st=1702637537~exp=1702638137~hmac=35e1f3ed8f2f3b65622e2f7ecd7b9fb446c7d4784b88dbc7daa3e4eedc7c6004",
      price: 470,
    },
    {
      id: 26,
      category: "hamberger",
      name: "Juiciest Hamburgers Ever",
      ime: "https://img.freepik.com/premium-photo/classic-burger-cheeseburger-close-up-white-background_74906-3442.jpg?w=740",
      price: 370,
    },
    {
      id: 27,
      category: "hamberger",
      name: "Perfect Hamburger Recipe",
      img: "https://img.freepik.com/free-photo/delicious-burguer-isolated-white-background_125540-3368.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 430,
    },
    {
      id: 28,
      category: "pizza",
      name: "Peppers Pizza",
      img: "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 270,
    },
    {
      id: 29,
      category: "pizza",
      name: "Crust pie pizza",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 250,
    },
    {
      id: 30,
      category: "pizza",
      name: "Pizza Brava",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 510,
    },
    {
      id: 31,
      category: "pizza",
      name: "La Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 470,
    },
    {
      id: 32,
      category: "pizza",
      name: "Mario Pizza",
      img: "https://img.freepik.com/premium-psd/pizza-with-red-sauce-basil-leaves-transparent-background_927015-986.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 390,
    },
    {
      id: 33,
      category: "pizza",
      name: "Lava Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 240,
    },

    {
      id: 34,
      category: "hamberger",
      name: "Hamburger Recipe",
      img: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9018.jpg?w=740&t=st=1702637234~exp=1702637834~hmac=6a991b5ba18c5aa562550fbb54600d51026422bd50456fab25ceb94969e42512",
      price: 500,
    },
    {
      id: 35,
      category: "hamberger",
      name: "Air Fryer Hamburgers",
      img: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9025.jpg?w=740&t=st=1702637483~exp=1702638083~hmac=389733f078255a0bc8f4d3ed016da50a6f39e734a989f997e6cc5c0f25d02dd1",
      price: 450,
    },
    {
      id: 36,
      category: "hamberger",
      name: "Hamberger",
      img: "https://img.freepik.com/free-photo/delicious-burger_144627-17545.jpg?w=740&t=st=1702637537~exp=1702638137~hmac=35e1f3ed8f2f3b65622e2f7ecd7b9fb446c7d4784b88dbc7daa3e4eedc7c6004",
      price: 470,
    },
    {
      id: 37,
      category: "hamberger",
      name: "Juiciest Hamburgers Ever",
      ime: "https://img.freepik.com/premium-photo/classic-burger-cheeseburger-close-up-white-background_74906-3442.jpg?w=740",
      price: 370,
    },
    {
      id: 38,
      category: "hamberger",
      name: "Perfect Hamburger Recipe",
      img: "https://img.freepik.com/free-photo/delicious-burguer-isolated-white-background_125540-3368.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 430,
    },
    {
      id: 39,
      category: "pizza",
      name: "Crust pie pizza",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 250,
    },
    {
      id: 40,
      category: "pizza",
      name: "Pizza Brava",
      img: "https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 510,
    },
    {
      id: 41,
      category: "pizza",
      name: "La Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 470,
    },
    {
      id: 42,
      category: "pizza",
      name: "Mario Pizza",

      img: "https://img.freepik.com/premium-psd/pizza-with-red-sauce-basil-leaves-transparent-background_927015-986.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 390,
    },
    {
      id: 43,
      category: "pizza",
      name: "Lava Pizza",
      img: "https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 240,
    },
    {
      id: 44,
      category: "pizza",
      name: "Peppers Pizza",
      img: "https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&ga=GA1.1.1048105895.1694682042&semt=ais",
      price: 270,
    },
  ];

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  return (
    <div className="p-[20px]">
      <div className="grid grid-cols-2 gap-7">
        {foods
          .filter((e, i) => i >= start && i < end)
          .map((food) => {
            return <FoodCopmonent key={food.id} food={food} />;
          })}
      </div>

      {/* <button onClick={() => dispatch(addToCart(1))}>add</button> */}

      {/* pagination */}
      <div className="flex justify-center py-3 items-center gap-[10px]">
        <button
          onClick={() => {
            setStart(start - 10);
            setEnd(end - 10);
          }}
          disabled={!start}
          className={` p-1 border rounded-full ${
            start ? "hover:bg-gray-100" : "text-gray-400"
          }  text-[20px]`}
        >
          <MdOutlineNavigateBefore />
        </button>
        <div className="flex">
          <p>{start}</p>-<p>{end > foods.length ? foods.length : end}</p>
        </div>
        <button
          onClick={() => {
            setStart(start + 10);
            setEnd(end + 10);
          }}
          disabled={end > foods.length ? true : false}
          className={` p-1 border rounded-full ${
            end > foods.length ? "text-gray-400" : "hover:bg-gray-100"
          }  text-[20px]`}
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default Food;
