import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Products from "./Products";
import Swal from "sweetalert2";

const data = [
  {
    id: 1,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4TqVSDOlme1izQl_QW7ecc2zlFICNY5y4Ew&usqp=CAU",
    title: "Cauliflower ",
    desc: "red colored",
    price: 40,
  },
  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZy-01XrpbTBYhn9M8DE1Z6gA9vvSFifvRMA&usqp=CAU",
    title: "Beetroot",
    desc: "red colored",
    price: 39,
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAoFQLYd5udCW7VbiJDJUf0Pgb-VzfNZHSQ&usqp=CAU",
    title: "Cabbage ",
    desc: "red colored",
    price: 33,
  },
  {
    id: 4,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNouus0hQdJ6CoIZbzDUhcmpsy6X29vB2jg&usqp=CAU",
    title: "Eggplant ",
    desc: "red colored",
    price: 60,
  },
  {
    id: 5,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPe1cd3CMBycR6i0Bpgy54vAmIEoJFhOI3Q&usqp=CAU",
    title: "Cucumber",
    desc: "red colored",
    price: 30,
  },
  {
    id: 6,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYniHR9YkND7M7pu-4vM84cOiIHD_72IH9Mg&usqp=CAU",
    title: "Bitter Gourd ",
    desc: "red colored",
    price: 40,
  },
  {
    id: 7,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBmoodr0URJxj5Bjhr4bFwqvcVbZokfIN9Q&usqp=CAU",
    title: "Ash Gourd ",
    desc: "red colored",
    price: 55,
  },
  {
    id: 8,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UIT2TRsPFCnFnsSC93HqDNn6pr_kq-0ycw&usqp=CAU",
    title: "Tomato  ",
    desc: "red colored",
    price: 30,
  },
  {
    id: 9,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2D9fkq-YhqicpIcUMjy0iwXfUiz5zixe4g&usqp=CAU",
    title: "Indian Pea ",
    desc: "red colored",
    price: 90,
  },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const Swal = require("sweetalert2");

  useEffect(() => {
    setProducts(data);
  }, []);

  const addToCart = (id) => {
    if (cartItems.find((i) => i.id === id))
      return Swal.fire("Sorry", `You cannot add same item twice`, "error");

    if (cartItems.length >= 4)
      return Swal.fire("Sorry", `You cannot select more than 4 items`, "error");

    const item = products.find((p) => p.id === id);
    const newItems = [...cartItems, item];
    setCartItems(newItems);
  };

  const chooseItem = () => {
    if (cartItems.length <= 0)
      return Swal.fire("Sorry", `Your cart is empty`, "error");

    const index = Math.floor(Math.random() * cartItems.length);
    Swal.fire("Good job!", `You have won ${cartItems[index].title}`, "success");
    // alert(`You have won ${cartItems[index].title}`);
  };

  const clear = () => {
    setCartItems([]);
  };
  return (
    <div className="row container">
      <div className="col col-8">
        <Products addToCart={addToCart} products={products}></Products>
      </div>
      <div className="col col-4">
        <Cart
          cartItems={cartItems}
          chooseItem={chooseItem}
          clear={clear}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
