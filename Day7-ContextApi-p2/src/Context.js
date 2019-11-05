import React from 'react';
const myContext = React.createContext('Some Default value');
export const Provider = myContext.Provider;
export const Consumer = myContext.Consumer;
