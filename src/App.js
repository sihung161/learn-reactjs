import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import productApi from './api/productApi';
import './App.css';
import Header from './components/Header';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    }
    fetchProducts();
  }, []);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<CounterFeature />} />
        <Route path='todos' element={<TodoFeature />} />
        <Route path='albums' element={<AlbumFeature />} />
      </Routes>

    </div>
  );
}

export default App;
