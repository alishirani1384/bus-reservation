"use client";
import {Autocomplete, AutocompleteItem} from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

function SelectCity({Label}:{Label:string}) {
    const [cities,setCities]=useState<any>();
    const [loading,setLoading]=useState<boolean>(true);
    async function getCities(){
        const res=await fetch("/api/city");
        const data=await res.json();
        setCities(data);
        setLoading(false);
    }
    useEffect(()=>{
        getCities();
    },[cities])
    



  return (
    <Autocomplete 
        label={Label}
        className="max-w-xs" 
      > {
        loading 
        ?
         <AutocompleteItem value={"hello"} key={5}>در حال دریافت لیست شهرها</AutocompleteItem> 
         :
         cities?.map((city:any) => (
          <AutocompleteItem key={city.id} value={city.title}>
            {city.title}
          </AutocompleteItem>
        ))
      }
        
      </Autocomplete>
  )
}

export default SelectCity