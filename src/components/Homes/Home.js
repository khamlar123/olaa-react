import './Home.scss'
import Slider from './Components/Slider';
import Brand from './Components/Brand';
import ProductFlag from './Components/ProductFlag';
import ProductList from '../../data/Products';
import Ads from './Components/Ads';
import Item from './Components/Item';
import Adsimg1 from '../../images/ads/Bang Speaker_PV_02.png';
import Adsimg2 from '../../images/ads/V30_PC_01.png';
import { useState, useEffect } from 'react';

function Home() {
    const [productList,setProductList] = useState([]);
    const [seeMore,setSeeMore] = useState(1);

    useEffect(() => {
        setProductList(ProductList);
    }, []);

    function getSuperDeal() {
        return productList.filter(f => f.flagName === 'Super Deals');
    }

    function getHot() {
        return productList.filter(f => f.flagName === 'Hot');
    }

    function getNew() {
        let hasSeeMore = productList.filter(f => f.flagName === 'New').slice(0 , 12 * seeMore);
        return hasSeeMore;
    }

    function hasClickSeeMore() {
        const num1 = seeMore +1;
        setSeeMore(num1);
    }

    return(
        <>
            <div className='home-wrapper'>
                <div className='home-container'>
                    <Slider/>
                    <Brand/>
                    <ProductFlag  product={getSuperDeal()} name={'Super Deals'} />
                    <Ads img={Adsimg1} />
                    <ProductFlag product={getHot()} name={'Hot'} />
                    <Ads img={Adsimg2} />
                    <div className='new-product'>
                        { getNew().map(m => (
                            <Item key={m.id} item={m} />
                        ))}
                    </div>
                    <div className='see-more' >
                        <button onClick={hasClickSeeMore}>
                            See More
                            <span className="material-symbols-outlined">
                                expand_more
                            </span>
                        </button>
                    </div>
                </div>
            </div>
      


        </>
    )
}

export default Home;