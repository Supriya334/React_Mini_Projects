import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function fetchTheApi() {
      try {
        let res = await axios({
          method: "get",
          url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees",
        });

        setProducts(res.data.data); // Updated to match the actual data structure
      } catch (error) {
        console.log(error);
      }
    }
    fetchTheApi();
  }, []);

  return (
    <div className='App'>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}> 
            <img src={product.image} />
            <h1>{product.name}</h1>
            <p>{product.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
