import { useState } from 'react';
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/products?query=${encodeURIComponent(query)}`);
  }
  return (
    <div className="custom-search_col col-12">
      {query}
      <div className="hm-form_area">
        <form action="#" className="hm-searchbox">
          {/*  */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for product"
          />
          <button className="header-search_btn" onClick={handleSearch} >
            <i className="ion-ios-search-strong">
              <span>Search</span>
            </i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar