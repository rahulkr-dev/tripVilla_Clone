import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Demo = () => {
    const store = useSelector(store=>store.search.searchData);
    useEffect(()=>{
        console.log(store)
    },[])
  return (
    <div>
        this is demo page
    </div>
  )
}

export default Demo