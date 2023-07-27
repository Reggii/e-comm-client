import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import './products.scss';
import useFetch from '../../hooks/useFetch';
import { all } from 'axios';

const Products = () => {
    
    const [maxPrice, setMaxPrice] = React.useState(300);
    const [sort, setSort] = React.useState('desc');
    const [selectedSubCats, setSelectedSubCats] = useState([])

    const {data,loading,error} = useFetch(`/products?populate=*`)

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
    
        setSelectedSubCats(
          isChecked
            ? [...selectedSubCats, value]
            : selectedSubCats.filter((item) => item !== value)
        );
      };

    const allSubCats = data?.map(item => (
    item.attributes.sub_categories.data[0].attributes.title
      ))
    const allUniqueSubCats = Array.from(new Set(allSubCats))

    const checkBoxes = allUniqueSubCats?.map((item, index) => (
        <div className="inputItem" key={index}>
          <input
            type="checkbox"
            id={index}
            value={item}
            onChange={handleChange}
            checked={selectedSubCats.includes(item)}
          />
          <label htmlFor={index}>
            {item}
          </label>
        </div>
      ));
    
    return (
        <div className='products'>
            <div className="left">
                <div className="filter">
                    <h2>Categories</h2>
                    {error 
                        ? "Something went wrong" 
                        : loading
                        ? "Loading..."
                        : checkBoxes
                        }
                </div>
                <div className="filter">
                    <h2>Sort by price</h2>
                    <span className='min'>0$</span>
                    <input type="range" min={0} max={300} onChange={(e)=>setMaxPrice(e.target.value)}/>
                    <span className='max'>{maxPrice+'$'}</span>
                </div>
                <div className="filter">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" name="price" value="asc" onChange={(e)=>setSort('asc')}/>
                        <label htmlFor="asc">Price (Lowest)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc" name="price" value="dsc" onChange={(e)=>setSort('desc')}/>
                        <label htmlFor="desc">Price (Highest)</label>
                    </div>

                </div>
            </div>
            <div className="right">
                <List maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
            </div>
        </div>
    );
};

export default Products;