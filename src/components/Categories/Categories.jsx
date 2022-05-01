import React from "react";
import styles from "./Categories.module.css";
const Categories = ({ categoriesGiven }) => {
  return (
    <div className={`${styles.categoriesContainer}`}>
      {categoriesGiven.map((everyCategory) => {
        const {_id,categoryName,imgUrl,description}=everyCategory;
        return (
          <div key={_id} className={`${styles.categoryItem}`}>
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
                <div className={`${styles.categoryInfoHeading}`}>{categoryName}</div>
                <div className={`${styles.card_info}`}>
                  <p className={`${styles.card_info_title}`}>
                    SHORT INFO:
                  </p>
                  <p>
                    {description}
                  </p>
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
