import React, {createContext, useState } from 'react';
import NewsItems from './data/newsdata';
import PartnersItems from './data/partnerdata';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [newsItems, setNewsItems] = useState(NewsItems);
  const [partnersItems, setPartnersItems] = useState(PartnersItems);
  
  return (
    <AppContext.Provider
      value={{
        newsItems,
        partnersItems
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
