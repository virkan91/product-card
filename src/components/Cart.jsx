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
import { addToCart, deleteItemOne } from "../counter/counterSlice";


export default function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="flex flex-col gap-2 p-[15px]">
          {cart

            .map((item, index) => {
            return (
              <div key={item.id} className="flex">
                <img src={item.img} className="w-[50px] h-[50px]" alt="" />
                <div>
                  <b>{item.name}</b>
                  <p>{item.price}RUB</p>
                </div>
                <div className="px-[10px] flex gap-[10px] items-center">
                  <button onClick={() => dispatch(deleteItemOne(index))} className="border rounded-full text-[18px] p-1">
                    -
                  </button>
                  <p>{ cartArrId.filter(e => e == item.id).length }</p>
                  <button onClick={() => dispatch(addToCart(item))} className="border rounded-full text-[18px] p-1">
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </List>
      <Divider />
      <List>
        <div className="p-[15px]">
          Total:{" "}
          {cart.length
            ? cart.map((item) => item.price).reduce((a, b) => a + b)
            : null}
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
