import Fuse from 'fuse.js';
import SearchBar from "material-ui-search-bar";
import React, { useEffect, useRef, useState } from "react";
import './App.css';
import ItemList from './List';
import Products from './products.json';

const Search = () => {
  const [searched, setSearched] = useState("");
  const [result, setResult] = useState([]);
  const fuse = useRef(null);

  const requestSearch = (searchedVal) => {
    setSearched(searchedVal);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const setUpIndexing = () => { 
    const eligibleProductsForMerchants = Products.filter(each => each);

    const options = {
      keys: [{
        name: 'tags.value',
        weight: 0.4
      },
      {
        name: 'title',
        weight: 0.6
      }],
      // keys: [],
      includeScore: true,
      ignoreLocation: false,
      threshold: 0.4,
      minMatchCharLength: 5
    }
    
    // using indexing
    // const indexedProducts = Fuse.createIndex(eligibleProductsForMerchants.keys, eligibleProductsForMerchants)
    // fuse.current = new Fuse(eligibleProductsForMerchants, options, indexedProducts);

    // using nested search 
    fuse.current = new Fuse(eligibleProductsForMerchants, options);
  };

  useEffect(() => {
    setUpIndexing();
  }, []);

  useEffect(() => {
    if (searched.length >= 3) {
      const result = fuse.current.search(searched, { limit: 7 });
      setResult(result);
    }
  }, [searched]);

  return (
    <div className="search-container">
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
      <div className="result-container">
        <span className="heading">Searched Items</span>
        <div className="result-list">
          <ItemList data={result} />
        </div>
      </div>
    </div>
  );
};

export default Search;