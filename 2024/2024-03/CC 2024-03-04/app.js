//============================
//SH - DATA TRANSFORMATION
//============================

// Your task is to implement generateOrderSummary function

/* // TODO: it should generate summary for every order
  // so that response will look like this:
  //{
  //  orderId: 1001,
  //  user: { id: 1, name: 'Alice', age: 30 },
  //  product: { id: 101, name: 'Product A', price: 50 },
  //  total: 100 // price * quantity
  //}
 */

  const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
  ];
  
  const products = [
    { id: 101, name: 'Product A', price: 50 },
    { id: 102, name: 'Product B', price: 100 },
    { id: 103, name: 'Product C', price: 75 }
  ];
  
  const orders = [
    { id: 1001, userId: 1, productId: 101, quantity: 2 },
    { id: 1002, userId: 2, productId: 102, quantity: 1 },
    { id: 1003, userId: 1, productId: 103, quantity: 3 }
  ];
  
  
  
  const generateOrderSummary = ({ orders, products, users }) => {
    return orders.map(order => {
      const user = users.find(user => user.id === order.userId);
      const product = products.find(product => product.id === order.productId);
      const total = product.price * order.quantity;
  
      return {
        orderId: order.id,
        user: { id: user.id, name: user.name, age: user.age },
        product: { id: product.id, name: product.name, price: product.price },
        total: total
      };
    });
  };
  
  
  const Component = () => {
      const [body, setBody] = React.useState({});
    
    React.useEffect(() => {
          setBody(generateOrderSummary({ products, orders, users }))
    }, []);
    
      return (
        <div className="container">
        <pre>{JSON.stringify(body, null, 2)}</pre>
        </div>
    )
  }
  
  ReactDOM.render(<Component />, document.querySelector("#app"))
  