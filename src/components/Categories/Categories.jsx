import React from "react";
import styles from "./Categories.module.css";
const Categories = ({ categoriesGiven }) => {
  return (
    <div className={`${styles.categoriesContainer}`}>
      {categoriesGiven.map((everyCategory) => {
        return (
          <div key={everyCategory} className={`${styles.categoryItem}`}>
            <div className={`${styles.categoryItemContainer}`}>
              <div className={`${styles.categoryImageContainer}`}>
                <img
                  src="https://i.imgur.com/qhE9KtV.jpg"
                  className={`${styles.categoryImage}`}
                  alt="CATEGORY DUMMY IMAGE"
                />
              </div>
              <div className={`${styles.categoryInfoContainer}`}>
                <div className={`${styles.categoryInfoHeading}`}>TRAVEL</div>
                <div className={`${styles.card_info}`}>
                  <p className={`${styles.card_info_title}`}>
                    10 Best Things about Travel
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    ab.
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
