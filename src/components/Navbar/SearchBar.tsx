import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";


interface Props {
    data: any;
    event: any;
}

const SearchBar: React.FC<Props> = ({ data}): JSX.Element => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event: { target: { value: any; }; }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value: { title: string; }) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="mainSearch">
    <div className="search" style={{marginTop:"-100px",borderRadius:"50px"}}>
      <div className="searchInputs" style={{height:"35px"}}>
        
        <input
          type="text"
          id="iconified"
          className="fontAwesome"
          placeholder="&#xF002;"
          value={wordEntered}
          onChange={handleFilter}
          style={{ maxWidth:'250px',border:"2px solid black",borderRadius:"10px"}}
        />
        
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult" style={{zIndex:"9999"}}>
          {filteredData.slice(0, 15).map((value:any) => {
            return (
              <Link id="mainSearch" className="dataItem" to={`/${value.id}`} >
                <Link to={`/${value.id}`}>{value.title} </Link>
              </Link>
            );
          })}
        </div>
      )}
    </div>
    </div>
  );
}

export default SearchBar;
