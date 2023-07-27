import React from "react";
import CardHome from "../Cards/CardHome";
import './featuredproducts.scss'
import useFetch from "../../hooks/useFetch";

export default function FeaturedProducts() {

    const {data,loading,error} = useFetch(
        `/products?populate=*`
        )
    console.log(data)
    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>Featured Products</h1>
                <p>
                Welcome to cmd Fashion where fashion meets coding! 
                Are you tired of binary choices between style and programming? 
                Well, fret no more, because we've cracked the code on geek-chic fashion. 
                Get ready to rock the runway (or command line) in attire that's as functional as it is fabulous. 
                At cmd Fashion, we dress programmers to impress... and debug in style!
                </p>
            </div>
            <div className="bottom">
                {error 
                    ? "Something went wrong!"
                    : loading
                    ? "loading"
                    : data.slice(0, 3).map((d) => (<CardHome item={d} key={d.id} price={d.price}/>))
                }
            </div>
        </div>
    )
}