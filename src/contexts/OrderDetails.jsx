import { createContext, useContext, useState } from 'react';
import { pricePerItem } from '../constants';

const OrderDetails = createContext();

export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);

  if (!contextValue)
    throw new Error('useOrderDetails must be called from within an OrderDetailsProvider');

  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {},
    toppings: {},
  });

  const updateOptionCount = (itemName, newItemCount, optionType) => {
    const newOptionCount = { ...optionCounts };

    newOptionCount[optionType][itemName] = newItemCount;

    setOptionCounts(newOptionCount);
  };

  const calculateTotal = (optionType) => {
    const countsArray = Object.values(optionCounts[optionType]);
    const totalCount = countsArray.reduce((total, value) => total + value, 0);
    return totalCount * pricePerItem[optionType];
  };

  const totals = {
    scoops: calculateTotal('scoops'),
    toppings: calculateTotal('toppings'),
  };

  const resetOrder = () => {
    setOptionCounts({
      scoops: {},
      toppings: {},
    });
  };

  const value = { optionCounts, totals, updateOptionCount, resetOrder };
  return (
    <OrderDetails.Provider
      value={value}
      {...props}
    />
  );
}
