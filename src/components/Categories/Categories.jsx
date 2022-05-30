import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCategorySelected } from "reduxFiles";
import styles from "./Categories.module.css";
const Categories = ({ categoriesGiven }) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  return (
    <div className={`${styles.categoriesContainer}`} >
      {categoriesGiven?.map((everyCategory) => {
        const {_id,categoryName,imgUrl,description}=everyCategory;
        return (
          <div
            key={_id}
            className={`${styles.categoryItem}`}
            onClick={() => {
              dispatch(updateCategorySelected(categoryName));
              navigate("/explore");
            }}
          >
            <div className={`${styles.categoryItemContainer}`}>
              <div className={`${styles.categoryImageContainer}`}>
                <img
                  src={imgUrl}
                  loading="lazy"
                  className={`${styles.categoryImage}`}
                  alt={categoryName}
                />
              </div>
              <div className={`${styles.categoryInfoContainer}`}>
                <div className={`${styles.categoryInfoHeading}`}>
                  {categoryName}
                </div>
                <div className={`${styles.card_info}`}>
                  <p className={`${styles.card_info_title}`}>SHORT INFO:</p>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export { Categories };
