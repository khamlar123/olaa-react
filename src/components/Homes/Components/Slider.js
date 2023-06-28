import './Slider.scss';
import Menue from './Menue';
import { useState, useEffect } from 'react';
import slider1 from '../../../images/slider/PT-C01D.png';
import slider2 from '../../../images/slider/S100_3000ຍອ_01.jpg';
import slider3 from '../../../images/slider/S520_HP_06.jpg';


function Slider() {
    const [sliderList, setSliderList] = useState([
        {id: 1, img: slider1},
        {id: 2, img: slider2},
        {id: 3, img: slider3},
    ]); 

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {

            if(count < sliderList.length -1){
                setCount(count + 1);
            }else{
                setCount(0);
            }
          }, 3000);
          return () => clearInterval(interval);
    }, [count]);

    function updateCount(index) {
        setCount(index)
    }
    
    return(
        <>
            <div className="slider-wrapper">
                <div className='menue'>
                    <Menue/>
                </div>
                <div className='slider-img'>
                    <img src={sliderList[count].img} alt={`img`+ sliderList[count].id} />
                </div>

                <div className='dot-wrapper'>
                    {sliderList.map((m, index) => (
                        <div className={index == count ? 'dot-item active': 'dot-item'} onClick={() => updateCount(index)} key={m.id}></div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Slider;