import React, { createContext, useContext, useState, useEffect } from "react";
import { receiveAllCategories } from "services";
const CategoriesContext = createContext(null);

const useCategories = () => {
  const contextReceived = useContext(CategoriesContext);
  if (contextReceived === undefined) {
    throw new Error("useCategories Hook must be used within Categories Provider Only");
  }
  return contextReceived;
};

const CategoriesProvider = ({ children }) => {
  const [categoriesList, setCategoriesList] = useState([]);
  const categoriesSetup = async () => {
    try {
      const {
        data: { categories: categoriesAvailable },
      } = await receiveAllCategories();
      setCategoriesList(categoriesAvailable);
    } catch (categoriesSetupError) {
      console.error("ERROR OCCURED WHILE SETTING UP DATA FROM CATEGORIES");
    }
  };
  useEffect(() => {
    categoriesSetup();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categoriesList, setCategoriesList }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { useCategories, CategoriesProvider };
