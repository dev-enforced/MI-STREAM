import React from "react";
import { useSelector } from "react-redux";
// import { useCategories } from "context";
import styles from "./CategoryChips.module.css";
const CategoryChips = () => {
  // const { categoriesList } = useCategories();
  const { categoriesList } = useSelector(
    (storeReceived) => storeReceived.category
  );
  return (
    <div
      className={`gentle-flex-gap g-flex-align-center ${styles.categories_wrapper}`}
    >
      <div className={`pos-relative`}>
        <input
          type="radio"
          name="category-choice"
          id="All"
          className={`${styles.category_input}`}
        />
        <label htmlFor="All" className={`${styles.category_label}`}>
          ALL
        </label>
      </div>
      {categoriesList?.map(({ _id, categoryName }) => {
        return (
          <div key={_id} className={`pos-relative`}>
            <input
              type="radio"
              name="category-choice"
              id={categoryName}
              className={`${styles.category_input}`}
            />
            <label
              className={`${styles.category_label}`}
              htmlFor={categoryName}
            >
              {categoryName}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export { CategoryChips };
