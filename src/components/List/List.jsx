import React from "react";
import './list.scss';
import Card from "../Cards/CardHome";
import useFetch from "../../hooks/useFetch";

export default function List({ subCats, maxPrice, sort, }) {
    const {data, loading, error} = useFetch(`/products?populate=*
        ${subCats?.map((subCat) => `&filters[sub_categories][title]=${subCat}&[filters][sub_categories]`).join('')}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)
    return (
        <div className="list">
            {error 
            ? "Something went wrong"
            : loading
            ? "Loading ..."
            :  data?.map((d) => (<Card item={d} key={d.id} price={d.price}/>))}
        </div>
    );
}