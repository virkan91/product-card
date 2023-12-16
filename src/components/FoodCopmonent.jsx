import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ShoppingCartRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart } from "../counter/counterSlice";

const FoodCopmonent = ({ key, food }) => {
  const dispatch = useDispatch()

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
            className="bg-white object-cover h-[240px]"
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

        <CardActions className="flex justify-between bg-gray-300 rounded-[15px_15px_0_0]">
          <p className="font-bold">
            {food.price}
            <span className="text-[12px]">RUB</span>
          </p>
          <Button onClick={() => dispatch(addToCart(food))} variant="contained" startIcon={<ShoppingCartRounded />}>
            Add item
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default FoodCopmonent;
