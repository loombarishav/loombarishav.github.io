import React from 'react';
import './App.css';
import Search from './Search';
// import SearchV2 from './SearchV2';

function App() {
  // const [query, updateQuery] = useState('');
  // const fuse = new Fuse(characters, {
  //   keys: [
  //     'name',
  //     'company',
  //     'species'
  //   ],
  //   includeScore: true,
  //   ignoreLocation: true,
  // });
  // const results = fuse.search(query);

  return (
    <>
      <div className='app'>
        <Search />
        {/* <SearchV2 /> */}
      </div>
    </>
  );
}

export default App;
