import React, { useState } from "react";

import "./Menu.css";
import Rec from "../src/assets/Rectangle 46 (2).png";
import Rec1 from "../src/assets/Rectangle 46 (3).png";
import Rec2 from "../src/assets/Rectangle 46 (5).png";
import Rec3 from "../src/assets/Rectangle 46 (6).png";
import Rec4 from "../src/assets/Rectangle 46 (7).png";
import Rec5 from "../src/assets/Rectangle 46 (8).png";
import Rec7 from "../src/assets/Rectangle 46 (10).png";
import Rec8 from "../src/assets/Rectangle 46 (5).png";
import Rec9 from "../src/assets/Rectangle 46 (6).png";
import Rec10 from "../src/assets/Rectangle 46 (11).png";
import dele from "../src/assets/delete-bin-2-line (1).png";
import side from "../src/assets/side wall.png";
import close from "../src/assets/Close.png";

const Menu = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    inStock: true,
    quantityAvailable: 8,
    description: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 12.99,
    image: Rec,
    inStock: true,
    quantityAvailable: 5,
    description: "Delicious pizza topped with spicy pepperoni slices.",
  },
  {
    id: 3,
    name: "Cheeseburger",
    category: "Burgers",
    price: 8.49,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    inStock: true,
    quantityAvailable: 10,
    description: "Juicy beef patty with melted cheese and fresh toppings.",
  },
  {
    id: 4,
    name: "Vegan Burger",
    category: "Burgers",
    price: 9.99,
    image: Rec,
    inStock: false,
    quantityAvailable: 0,
    description: "A plant-based burger with all the classic fixings.",
  },
  {
    id: 5,
    name: "Caesar Salad",
    category: "Salads",
    price: 7.99,
    image: Rec1,
    inStock: true,
    quantityAvailable: 12,
    description:
      "Crisp romaine lettuce, croutons, parmesan, and Caesar dressing.",
  },
  {
    id: 6,
    name: "Greek Salad",
    category: "Salads",
    price: 8.49,
    image: Rec2,
    inStock: true,
    quantityAvailable: 7,
    description: "A mix of cucumbers, olives, tomatoes, and feta cheese.",
  },
  {
    id: 7,
    name: "Spaghetti Carbonara",
    category: "Pasta",
    price: 11.99,
    image: Rec3,
    inStock: true,
    quantityAvailable: 6,
    description: "Classic pasta with creamy egg sauce, pancetta, and parmesan.",
  },
  {
    id: 8,
    name: "Fettuccine Alfredo",
    category: "Pasta",
    price: 12.99,
    image: Rec4,
    inStock: false,
    quantityAvailable: 0,
    description: "Rich and creamy fettuccine with a buttery Alfredo sauce.",
  },
  {
    id: 9,
    name: "Grilled Chicken Sandwich",
    category: "Sandwiches",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    inStock: true,
    quantityAvailable: 4,
    description: "Grilled chicken breast with fresh vegetables and sauce.",
  },
  {
    id: 10,
    name: "Club Sandwich",
    category: "Sandwiches",
    price: 9.49,
    image: Rec5,
    inStock: true,
    quantityAvailable: 7,
    description:
      "A classic triple-decker sandwich with bacon, turkey, and cheese.",
  },
  {
    id: 11,
    name: "Sushi Platter",
    category: "Sushi",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    inStock: true,
    quantityAvailable: 15,
    description: "An assortment of fresh sushi rolls and sashimi.",
  },
  {
    id: 12,
    name: "Salmon Roll",
    category: "Sushi",
    price: 14.99,
    image: Rec7,
    inStock: false,
    quantityAvailable: 0,
    description: "Fresh salmon rolled with vinegared rice and seaweed.",
  },
  {
    id: 13,
    name: "Fried Chicken",
    category: "Chicken",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    inStock: true,
    quantityAvailable: 20,
    description: "Crispy golden fried chicken with a savory seasoning.",
  },
  {
    id: 14,
    name: "Chicken Tenders",
    category: "Chicken",
    price: 8.49,
    image: Rec8,
    inStock: true,
    quantityAvailable: 10,
    description: "Tender chicken strips, perfectly breaded and fried.",
  },
  {
    id: 15,
    name: "French Fries",
    category: "Sides",
    price: 3.99,
    image: Rec9,
    inStock: true,
    quantityAvailable: 30,
    description: "Crispy golden fries, perfect for any meal.",
  },
  {
    id: 16,
    name: "Onion Rings",
    category: "Sides",
    price: 4.49,
    image: Rec4,
    inStock: true,
    quantityAvailable: 12,
    description: "Crispy onion rings with a light batter.",
  },
  {
    id: 17,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 6.99,
    image: Rec10,
    inStock: true,
    quantityAvailable: 5,
    description: "Rich chocolate cake with a smooth frosting.",
  },
  {
    id: 18,
    name: "Ice Cream Sundae",
    category: "Desserts",
    price: 5.49,
    image: Rec4,
    inStock: false,
    quantityAvailable: 0,
    description: "Vanilla ice cream topped with chocolate syrup and sprinkles.",
  },
  {
    id: 19,
    name: "Coke",
    category: "Drinks",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987",
    inStock: true,
    quantityAvailable: 50,
    description: "Refreshing Coke, the classic soda.",
  },
  {
    id: 20,
    name: "Orange Juice",
    category: "Drinks",
    price: 2.49,
    image: Rec,
    inStock: true,
    quantityAvailable: 20,
    description: "Freshly squeezed orange juice, a healthy drink option.",
  },
  {
    id: 20,
    name: "Orange Juice",
    category: "Drinks",
    price: 2.49,
    image: Rec,
    inStock: true,
    quantityAvailable: 20,
    description: "Freshly squeezed orange juice, a healthy drink option.",
  },
];

const Mar = () => {
  const [cart, setCart] = useState([]); // State for the cart
  const [isSidebarVisible, setSidebarVisible] = useState(false); // State for showing/hiding sidebar

  // Function to add items to the cart
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity < item.quantityAvailable
                    ? cartItem.quantity + 1
                    : cartItem.quantity,
              }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setSidebarVisible(true); // Show the cart when an item is added
  };

  // Function to increment item quantity
  const incrementQuantity = (itemId) => {
    setCart(
      cart.map((item) =>
        item.id === itemId && item.quantity < item.quantityAvailable
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Function to decrement item quantity
  const decrementQuantity = (itemId) => {
    setCart(
      cart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Function to calculate the total price
  const calculateTotal = () =>
    cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  return (
    <div className="menu-page">
      {/* Menu Section */}
      <div className="menu-section">
        / <h1 className="Fo">TODAYS MENU</h1>
        <div className="menu-container">
          {Menu.map((item) => (
            <div key={item.itemid} className="menu-card">
              {/* Image at the top */}
              {/* Details section */}
              <div className="menu-details">
                <h3 className="menu-name">{item.name}</h3>
                <p className="menu-description">
                  {item.description || "No description available"}
                  <br />
                  <p className="menu-price">GBP {item.price.toFixed(2)}</p>
                  {item.inStock && (
                    <p className="ava"> Available: {item.quantityAvailable}</p>
                  )}
                </p>
                {!item.inStock && (
                  <p className="menu-out-of-stock">Out of Stock</p>
                )}
                {/* Stock information */}
              </div>
              <div className="m-1">
                <div className="menu-image-con">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-image"
                  />
                  <div className="add-button-rap">
                    <button
                      className="menu-add-button"
                      disabled={!item.inStock}
                      onClick={() => addToCart(item)}
                    >
                      <span className="add-button-icon">+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Section */}
      {isSidebarVisible && (
        <div
          className="sidebar"
          style={{ position: "absolute", top: 20, right: 0 }}
        >
          <img src={side} alt="" className="side" />

          <img
            src={close}
            alt=""
            className="close-sidebar"
            onClick={() => setSidebarVisible(false)}
          />
          <h2 className="side-head">Please select your first Item</h2>
          {cart.length === 0 ? (
            <p className="empty">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="line"></div>
                  <h4 className="de">{item.name}</h4>
                  <div className="cart-item-details">
                    {/* <p>GBP {item.price.toFixed(2)}</p> */}
                    <div className="cart-item-actions">
                      <button
                        className="minus"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="num">{item.quantity}</span>
                      <button
                        className="plus"
                        onClick={() => incrementQuantity(item.id)}
                        disabled={item.quantity >= item.quantityAvailable}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="remove-button"
                      >
                        <img src={dele} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <h3 className="pay">Total to pay: GBP {calculateTotal()}</h3>
              <button className="check">Checkout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Mar;
