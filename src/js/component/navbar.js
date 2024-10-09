import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-dark bg-dark mb-3 px-4">
      <Link to="/" className="navbar-brand mb-0 h1 d-flex align-items-center">
        <img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG1.png" alt="Home" style={{ width: "200px", height: "120px" }} />
      </Link>
      

      <span className="navbar-text mx-auto h2 text-white">Stephens64 Star Wars Blog</span>

      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-dark mr-2 dropdown-menu-end">
            {store.favorites.length > 0 ? (
              store.favorites.map((favorite, index) => (
                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  {favorite}
                  <button className="btn btn-danger btn-sm ml-2" onClick={() => actions.removeFromFavorites(favorite)}>
                    X
                  </button>
                </li>
              ))
            ) : (
              <li className="dropdown-item">No favorites added</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
