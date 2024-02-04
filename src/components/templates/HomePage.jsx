import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { getCoinList } from '../../services/CryptoApi';
import Pagination from '../modules/Pagination';
import TableCoin from '../modules/TableCoin';

function HomePage() {
 const [coins , setCoins] = useState([]);
 const [isLoading , setIsLoading] = useState(true);

 useEffect (() => {
  const getData = async () => {
   const res = await fetch(getCoinList());
   const json = await res.json();
   setCoins(json);
   setIsLoading(false);
  };

  getData();
 } , []);


  return (
    <div>
      <Pagination />
      <TableCoin coins={coins} isLoading={isLoading}/>
    </div>
  )
}

export default HomePage
