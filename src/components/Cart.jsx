import * as React from "react";
import StyledBadge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { addToCart, deleteItemOne, resetCart } from "../counter/counterSlice";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const cartId = cart.map((e) => e.id);

  const cartArrId = cart.map((e) => e.id);
  console.log(cartArrId);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 390 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {cart.length ? (
        <List>
          <div className="flex flex-col gap-2 p-[15px] ">
            {cart
              .filter((e, i) => !cartId.includes(e.id, i + 1))
              .map((item, index) => {
                return (
                  <div key={item.id} className="flex  gap-4 border-b  ">
                    <img src={item.img} className="w-[50px] h-[50px]" alt="" />
                    <div>
                      <b>{item.name}</b>
                      <p>Price:&nbsp;&nbsp;{item.price}&nbsp;RUB</p>
                    </div>
                    <div className="px-[10px] flex gap-[10px] items-center mb-[25px]">
                      {cartArrId.filter((e) => e == item.id).length ? (
                        <button
                          onClick={() => dispatch(deleteItemOne(index))}
                          className=" rounded-full text-[18px] p-1"
                        >
                          -
                        </button>
                      ) : (
                        <button className="border rounded-full text-[18px] p-1">
                          -
                        </button>
                      )}
                      <p>{cartArrId.filter((e) => e == item.id).length}</p>
                      <button
                        onClick={() => dispatch(addToCart(item))}
                        className=" rounded-full text-[18px] p-1"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="p-[15px]">
            <button
              onClick={() => dispatch(resetCart())}
              className="border bg-[red] text-white p-[2px] px-[5px] rounded-[6px] font-medium"
            >
              Clear Cart
            </button>
          </div>
        </List>
      ) : (
        <p className="flex justify-center p-[20px] text-[#103755] font-bold ">
          MY CART
        </p>
      )}
      <Divider />
      <List>
        <div className="p-[15px] text-[#103755] font-bold">
          Total:{" "}
          {cart.length
            ? cart.map((item) => item.price).reduce((a, b) => a + b)
            : 0}{" "}
          &nbsp;RUB
        </div>
        <div className="p-[15px]">
          <button className="border bg-[#eeb808] text-white p-[4px] px-[5px] rounded-[6px] font-medium">
            Proceed to checkout
          </button>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <div key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  );
}

// const Cart = () => {
//

//   return (

//   );
// };

// export default Cart;
