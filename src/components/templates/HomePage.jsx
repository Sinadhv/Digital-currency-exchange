import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { getCoinList } from '../../services/CryptoApi';
import TableCoin from '../modules/TableCoin';

function HomePage() {
 const [coins , setCoins] = useState([]);


 useEffect (() => {
  const getData = async () => {
   const res = await fetch(getCoinList());
   const json = await res.json();
   setCoins(json);
  };

  getData();
 } , []);


  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  )
}

export default HomePage
