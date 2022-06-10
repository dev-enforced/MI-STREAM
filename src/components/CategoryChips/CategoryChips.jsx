import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCategorySelected } from "reduxFiles";
import styles from "./CategoryChips.module.css";
const CategoryChips = () => {
  const dispatch = useDispatch();
  const { categoriesList, categorySelected } = useSelector(
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
          checked={categorySelected === "All"}
          onChange={() => {
            dispatch(updateCategorySelected("All"));
          }}
        />
        <label htmlFor="All" className={`${styles.category_label}`}>
          ALL
        </label>
      </div>
      {categoriesList?.map(({ _id, categoryName }) => {
        return (
          <div
            key={_id}
            className={`pos-relative`}
            // onClick={() => {
            //   dispatch(updateCategorySelected(categoryName));
            // }}
          >
            <input
              type="radio"
              name="category-choice"
              id={categoryName}
              className={`${styles.category_input}`}
              checked={categorySelected === categoryName}
              onChange={(e) => {
                dispatch(updateCategorySelected(categoryName));
              }}
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
