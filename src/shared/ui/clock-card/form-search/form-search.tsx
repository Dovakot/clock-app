import React from "react";

export const FormSearch = () => (
  <form className="form-search">
    <label className="visually-hidden" htmlFor="search">
      Поиск
    </label>

    <input
      className="form-search__input"
      id="search"
      type="search"
      name="search"
      autoComplete="off"
      defaultValue=""
    />

    <ul className="list-unstyled form-search__select" style={{display: 'none'}}>
      <li></li>
    </ul>
  </form>
);
