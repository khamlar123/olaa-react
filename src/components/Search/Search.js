import './Search.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Products from '../../data/Products'
import Product from '../Homes/Components/Item'
function Search() {
    const {searchKey} = useParams();
    const [searchProducts,setSearchProducts] = useState([]);

    useEffect(() => {
        setSearchProducts(Products.filter(f => f.title.toLowerCase().includes(searchKey.toLowerCase())));
    }, [])

    return (
        <>
            <div className='search-wrapper'>
                <div className='search-container'>
                    <div className='search-title'>
                        <h5>Search result for: {searchKey}</h5> 
                    </div>
                    <div className='search-item'>
                        {searchProducts.map(m => (
                             <Product key={m.id} item={m} />
                        )) }
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search