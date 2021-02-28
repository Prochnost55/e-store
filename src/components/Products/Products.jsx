import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./productsStyle";

const products = [
  {
    id: 1,
    name: "Growing Old",
    description: "An old cabin on a mountain",
    price: "$5",
    image:
      "https://instagram.fdel41-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/46576838_340029370166235_3789656209252876090_n.jpg?tp=1&_nc_ht=instagram.fdel41-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=BY9eyhk6rnAAX_45_8b&oh=5ee106ad3b68df0f228cd175721dea28&oe=6064D676",
  },
  {
    id: 2,
    name: "Reconnecting",
    description: "It's the silence connecting us.",
    price: "$10",
    image:
      "https://instagram.fdel41-1.fna.fbcdn.net/v/t51.2885-15/e35/37678684_274206776694229_7246975030951673856_n.jpg?tp=1&_nc_ht=instagram.fdel41-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=JcDhHS5WwnYAX9Fycgq&oh=9d6a3b4d380013410ece6545dcb8b01b&oe=60628FFE",
  },
  {
    id: 3,
    name: "Teach me",
    description: "Depending on you",
    price: "$10",
    image:
      "https://instagram.fdel41-1.fna.fbcdn.net/v/t51.2885-15/e35/35364563_2264113147149499_1249066507896356864_n.jpg?tp=1&_nc_ht=instagram.fdel41-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=73wiIo4UuTMAX9wrkve&oh=304fd1b4f4a35c964fd72cff6f6b612f&oe=6064607A",
  },
  {
    id: 4,
    name: "Fallen",
    description: "Fallen for whispers of yours",
    price: "$10",
    image:
      "https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/35428170_1693854104026172_5006743230641864704_n.jpg?tp=1&_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=-XiJxFEEsmEAX8OJVYU&oh=ebecf90a285787546dde3d41679e64b1&oe=60625C68",
  },
  {
    id: 5,
    name: "Sunshine",
    description: "Holding on to you on a beach",
    price: "$10",
    image: "https://thepoetryofryan.files.wordpress.com/2017/05/sunshine.jpg",
  },
  {
    id: 6,
    name: "Forever",
    description: "Taken by you",
    price: "$10",
    image:
      "https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/33238865_340773689783883_2196809753961693184_n.jpg?tp=1&_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=qLWT_ubqv50AX9k_Qz6&oh=abaf9dc8322a47156b8a7262e090a205&oe=606208A0",
  },
  {
    id: 7,
    name: "Lustful lies",
    description: "Liar eyes are the evil",
    price: "$10",
    image:
      "https://thepoetryofryan.files.wordpress.com/2017/04/img-20170409-wa0007.jpg",
  },
  {
    id: 8,
    name: "She",
    description: "Beautiful Mess",
    price: "$10",
    image: "https://thepoetryofryan.files.wordpress.com/2016/09/ryan.png",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
