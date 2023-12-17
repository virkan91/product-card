import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../counter/counterSlice";
import FoodCopmonent from "../../components/FoodCopmonent";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Food = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.cart.data).filter(
    (e) => e.type === "food"
  );

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const data = useSelector((state) => state.cart.data);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="p-[20px]">
      <div className="grid grid-cols-3 gap-7">
        {foods
          .filter((e, i) => i >= start && i < end)
          .map((food) => {
            return <FoodCopmonent added={cart.find(e => e.id == food.id) ? true : false} key={food.id} food={food} />;
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
