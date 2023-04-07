import { create, insertBatch, search } from "@lyrasearch/lyra";
import SearchBar from "material-ui-search-bar";
import React, { useEffect, useState } from "react";
import "./App.css";
import ItemList from "./List";

 const docs = [
    {
      title: "Transactions",
      url: "https://dashboard.razorpay.com/app/payments",
    },
 ];
  
  const productDB = create({
    schema: {
      title: "string",
      url: "string",
    },
  });

insertBatch(productDB, docs, { batchSize: 500 });

const Search = () => {
  const [searched, setSearched] = useState("");
  const requestSearch = (searchedVal) => {
    setSearched(searchedVal);
  };

  useEffect(() => { 
  const searchResult = search(productDB, {
    term: "Harro",
    properties: ["title"],
    tolerance: 1,
  });

  console.log(searchResult);
  }, []);

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  //  const fuse = new Fuse(characters, {
  //   keys: [
  //     'name',
  //     'company',
  //     'species'
  //   ],
  //   includeScore: true,
  //   ignoreLocation: true,
  // });

  const response = [
    { name: "kwvurbejknscdm", description: "kwvurbejknscdm kwvurbejknscdm" },
    { name: "kwvurbejknscdm", description: "kwvurbejknscdm kwvurbejknscdm" },
    { name: "kwvurbejknscdm", description: "kwvurbejknscdm kwvurbejknscdm" },
  ];

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
          <ItemList data={response} />
        </div>
      </div>
    </div>
  );
};

export default Search;
