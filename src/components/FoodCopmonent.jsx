import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ShoppingCartRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItem } from "../counter/counterSlice";

const FoodCopmonent = ({ added, key, food }) => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div key={key} className="h-full">
      <Card
        sx={{ maxWidth: 345 }}
        className="flex flex-col h-full justify-between"
      >
        <CardActionArea className="h-full">
          <CardMedia
            component="img"
            height="140"
            image={food.img}
            alt="green iguana"
            className="bg-white object-cover h-[340px] p-[70px]"
          />
          <CardContent className="h-full">
            <Typography
              gutterBottom
              className="min-h-full"
              variant="h5"
              component="div"
            >
              {food.name}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className="flex justify-between rounded-[15px_15px_0_0]">
          <p className="font-bold">
            {food.price}
            <span className="text-[12px]">RUB</span>
          </p>
          <Button
            onClick={() => {
              cart.find((e) => e.id == food.id)
                ? dispatch(deleteItem(food.id))
                : dispatch(addToCart(food));
              setClick(true);
            }}
            variant={added ? "outlined" : "contained"}
            startIcon={<ShoppingCartRounded />}
          >
            {added ? "Added" : " Add to Cart"}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default FoodCopmonent;
