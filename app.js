const { useState } = React

// bold when hovering over a list item
const GroceryListItem = (props) => {
  const [isBold, setIsBold] = useState(false);

  const style = {
    fontWeight: isBold ? 'bold' : 'normal',
  };

  return (
    <li style={style} onMouseEnter={() => setIsBold(!isBold)} onMouseLeave={() => setIsBold(!isBold)}>
      {props.groceryItem}
    </li>
  );
  };

const GroceryList = (props) => (
<ul>
  {props.GroceryItems.map((groceryItem) => (
    <GroceryListItem groceryItem={groceryItem}/>
  ))}
</ul>
);

// // strike through when clicked
// const GroceryListItem = (props) => {
//   const [inBasket, setInBasket] = useState(false);

//   const style = {
//     textDecoration: inBasket ? 'line-through' : 'none',
//   };

//   return (
//     <li style={style} onClick={() => setInBasket(!inBasket)}>
//       {props.groceryItem}
//     </li>
//   );
//   };

// const GroceryList = (props) => (
// <ul>
//   {props.GroceryItems.map((groceryItem) => (
//     <GroceryListItem groceryItem={groceryItem}/>
//   ))}
// </ul>
// );


const App = () => (
<div>
  <h1>Grocery List</h1>
  <GroceryList GroceryItems={['milk', 'eggs', 'cheese']}/>
</div>
);

ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);