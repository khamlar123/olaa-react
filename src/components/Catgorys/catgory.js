import './catgory.scss'
import Product from '../Homes/Components/Item';
import Products from '../../data/Products';
import Brands from '../../data/brands';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Catgory() {
    const {id} = useParams();
    const [masteProductByBrand,setMasteProductByBrand] = useState([]);
    const [productByBrand,setProductByBrand] = useState([]);
    const [idss,setIdss] = useState([]);
    const [selBrand,setBrandId] = useState(0);
    const [sorting,setSorting] = useState(0);
    const [sortingPreOrder,setSortingPreOrder] = useState(0);

    useEffect(() => {
        const list = Products.filter(f => f.catgoryId == id);
        setProductByBrand(list);
        setMasteProductByBrand(list);
        setIdssFunc(list);
    }, []);

    function setIdssFunc(value) {
        setIdss(value.map(m => m.brandId));
    }

    function getAfterDp() {
        idss.push(0)
        const uniqueData = Array.from(new Set(idss));
        return uniqueData
    }

    function filterBrandFunc(id) {
        Brands.push({id: 0 , name: 'All', orderIndex: 0})
        const item = Brands.find(f => f.id === id)
        return item;
    }

    function sortingChange() {
        setSorting(sorting+1);
        if(sorting == 2){
            setSorting(1);
        }
        console.log('Sorting changed', sortingFunc(productByBrand, 'price', sorting));
        setProductByBrand(sortingFunc(productByBrand, 'price', sorting))
       
    }

    function sortingPreOrderChange() {
        setSortingPreOrder(sortingPreOrder+1);
        if(sortingPreOrder == 2){
            setSortingPreOrder(0);
        }
         (sortingPreOrder+1 === 1)? setProductByBrand(masteProductByBrand.filter(f => f.perOrder === false))
        :(sortingPreOrder+1 === 2)? setProductByBrand(masteProductByBrand.filter(f => f.perOrder === true))
        : setProductByBrand(masteProductByBrand)

    }

    const sortedData = getAfterDp().sort((a, b) => a - b);

    function setBrandIdFunc(id) {
        setBrandId(id);
       const itemB = (id > 0)?  masteProductByBrand.filter(f => f.brandId == id) : masteProductByBrand;
        setProductByBrand(itemB)
    } 

    function sortingFunc(data, str, opt) {
        const sortedData = data.sort((a, b) => {
            if(opt == 1){
                if (a[str] < b[str]) {
                    return -1;
                }
                if (a[str] > b[str]) {
                    return 1;
                }
                return 0;
            }else{
                if (a[str] < b[str]) {
                    return 1;
                }
                if (a[str] > b[str]) {
                    return -1;
                }
                return 0;
            }
        });

        return sortedData;
    }

    return (
        <>
           <div className='catgory-wrapper'>
                <div className='catgory-container'>

                    <div className='brand-warpper'>
                        <div className='brand-item'>
                            <div className='title'>
                                Brand: 
                            </div>
                            {sortedData.map(m => (
                                <div className={m == selBrand ? 'item active': 'item'} key={m} onClick={() =>setBrandIdFunc(m)}>
                                    <p>{filterBrandFunc(m).name}</p>
                                </div>
                            ))}
                        </div>

                        <div className='sort-by'>
                            <div className='title'>
                                Sort By:
                            </div>
                            <div className={sorting > 0 ? 'item active': 'item' } onClick={() => sortingChange()} >
                               <p>Price</p>
                                <div className='arrow'>
                                    <span className={sorting == 1? 'material-symbols-outlined arrow-active': 'material-symbols-outlined'}>
                                        arrow_drop_up
                                    </span>

                                    <span className={sorting == 2? 'material-symbols-outlined arrow-active': 'material-symbols-outlined'}>
                                        arrow_drop_down
                                    </span>
                                </div>
                            </div>

                            <div className='item sortin-pre' onClick={() => sortingPreOrderChange()}>{sortingPreOrder == 0? 'All' :sortingPreOrder == 1? 'In Stock' : 'Pre Order'}</div>
                        </div>
                        
                    </div>
                    <div className='product-wapper'>
                        {productByBrand.map(m => (
                            <Product key={m.id} item={m} />
                        ))}
                    </div>

                </div>
           </div>
        </>
    )
}

export default Catgory;