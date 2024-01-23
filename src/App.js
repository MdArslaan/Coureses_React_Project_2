import React, { useState,useEffect }  from 'react';
import {apiUrl, filterData } from './Data.js';
import Cards from './components/Cards.js';
import Filter from './components/Filter.js';
import Navbar from './components/Navbar.js';
import { toast } from 'react-toastify';
import Spiner from './components/Spiner.js';

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setloading] = useState(true);
  const [category,setCategory]=useState[filterData[0].title]
  const fetchData = async () => {
    setloading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    } catch (error) {
      toast.error('Something went wrong:', error);
    }
    setloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-500 flex-col min-h-screen">
      <div>
        <Navbar />
      </div>

      <div>
        <Filter 
        category ={category}
        setCategory={setCategory}
        filterData={filterData} />
      </div>
      <div className="w-11/12 max-w-[1200px] flex-wrap mx-auto flex justify-center items-center min-h-[50vh] m-3">
        {loading ? <Spiner /> : <Cards courses={courses} category={category} />}
      </div>
    </div>
  );
};

export default App;