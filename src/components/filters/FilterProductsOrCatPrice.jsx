import React from "react";
import { useRef } from "react";
import "./style/styleFilterDesktop.css";

const categories = ["Smartphones", "Smart TV", "Computers"];

const FilterProductsOrCatPrice = ({ products, setFilteredProduct }) => {
  const containerFilterPrice = useRef();
  const containerFilterCategory = useRef();

  const rotateRow = useRef();
  const rotateRow1 = useRef();

  const mostrarFilterPrice = () => {
    rotateRow1.current?.classList.toggle("rotate-row-open1");
    containerFilterPrice.current?.classList.toggle("open-filter-list");
  };

  const mostrarFilterCategory = () => {
    rotateRow.current?.classList.toggle("rotate-row-open");
    containerFilterCategory.current?.classList.toggle("open-filter-category");
  };

  const categoryFilter = (categoryFilter) => {
    setFilteredProduct(
      products.filter(
        (e) =>
          e.category?.name
            .toLowerCase()
            .includes(categoryFilter.toLowerCase()) === true
      )
    );
  };

  return (
    <aside className="container-filters">
      <article className="container-filter-price">
        <div className="price-btn-list">
          <p>Price</p>
          <i
            ref={rotateRow1}
            onClick={mostrarFilterPrice}
            className="bx bx-chevron-up"
          ></i>
        </div>

        <ul ref={containerFilterPrice} className="filter-price-inputs">
          <li className="container-inputs-price">
            <p>Desde</p>
            <input type="number" min="1" />
          </li>
          <li className="container-inputs-price-hasta">
            <p className="p-hasta">Hasta</p>
            <input className="input-hasta" type="number" min="1" />
          </li>
          <button className="filter-price-btn">Filtrar por precio</button>
        </ul>
      </article>

      <article className="container-filter-price">
        <div className="price-btn-list">
          <p>Categoria</p>
          <i
            ref={rotateRow}
            onClick={mostrarFilterCategory}
            className="bx bx-chevron-up"
          ></i>
        </div>

        <ul ref={containerFilterCategory} className="container-list-category">
          {categories.map((category) => (
            <li
              className="category-item"
              onClick={() => categoryFilter(category)}
              key={category}
            >
              {category}
            </li>
          ))}
        </ul>
      </article>
    </aside>
  );
};

export default FilterProductsOrCatPrice;
