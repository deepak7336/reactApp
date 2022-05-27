import React from "react";
// import { useEffect, useState } from "react";
// import Card from "./Card";
// import List from "./List";
// const Api_Url = "https://www.omdbapi.com/?i=tt3896198&apikey=a9d3c516";
const Navbar = () => {
  // const [searchTerm, setsearchTerm] = useState("batman");
  // const [movies, setMovies] = useState([]);
  // const Search = async (val) => {
  //   const response = await fetch(`${Api_Url}&s=${val}}`);
  //   const data = await response.json();
  //   setMovies(data.Search);
  // };
  // useEffect(() => {
  //   Search("spiderman");
  // }, []);
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:8000"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="http://localhost:8000"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:8000">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="http://localhost:8000"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="http://localhost:8000">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="http://localhost:8000">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="http://localhost:8000">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  // value={searchTerm}
                  // onChange={(e) => {
                  //   setsearchTerm(e.target.value);
                  // }}
                  // onSubmit={"return false;"}
                  className="form-control me-2"
                  // type="button"
                  // type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  // id="here"
                  className="btn btn-outline-success"
                  type="button"
                  // onClick={() => {
                  //   Search(searchTerm);
                  // searchTerm = searchTerm;
                  // console.log(JSON.stringify(searchTerm));
                  // <List />;
                  // }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {/* <List data={movies} /> */}
    </div>
  );
};

export default Navbar;
