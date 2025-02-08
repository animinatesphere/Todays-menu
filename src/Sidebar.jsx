// import React, { useState } from "react";

// const Sidebar = ({
//   cart,
//   decrementQuantity,
//   incrementQuantity,
//   removeFromCart,
//   calculateTotal,
// }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleSidebar = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <>
//       <button className="toggle-sidebar-button" onClick={toggleSidebar}>
//         {isVisible ? "Close Cart" : "Open Cart"}
//       </button>
//       <div className={`sidebar ${isVisible ? "show" : ""}`}>
//         <h2>Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div>
//             {cart.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="cart-item-image"
//                 />
//                 <div className="cart-item-details">
//                   <h4>{item.name}</h4>
//                   <p>GBP {item.price.toFixed(2)}</p>
//                   <div className="cart-item-actions">
//                     <button onClick={() => decrementQuantity(item.id)}>
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => incrementQuantity(item.id)}>
//                       +
//                     </button>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="remove-button"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <h3>Total: GBP {calculateTotal()}</h3>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Sidebar;
