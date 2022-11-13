import "./searchBar.css"
import { GoSearch } from "react-icons/go"

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div
        style={{
          backgroundImage: `url("https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.png")`,
          height:"350px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
          
        }}
      >
        <div className="inputBar">
        <GoSearch/><input type="text" placeholder="Where to ?"/>
        </div>
      
      </div>
    </div>
  );
};
export default SearchBar;
