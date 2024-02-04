import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { getCoinList } from '../../services/CryptoApi';
import Pagination from '../modules/Pagination';
import TableCoin from '../modules/TableCoin';

function HomePage() {
 const [coins , setCoins] = useState([]);
 const [isLoading , setIsLoading] = useState(true);
 const [page , setPage] = useState(1);
 useEffect (() => {
  setIsLoading(true);
  const getData = async () => {
   const res = await fetch(getCoinList(page));
   const json = await res.json();
   setCoins(json);
   setIsLoading(false);
  };

  getData();
 } , [page]);


  return (
    <div>
      <Pagination page={page} setPage={setPage}/>
      <TableCoin coins={coins} isLoading={isLoading}/>
    </div>
  )
}

export default HomePage
