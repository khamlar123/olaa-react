import './Brand.scss'
import imgg from '../../../images/slider/S100_3000ຍອ_01.jpg'
import { useState } from 'react';

function Brasnd() {

    const handleClickScroll = () => {
        const element = document.getElementById('img-25');
        if (element) {
          element.scrollIntoView({behavior: 'smooth' });
        }       
    };

    const [counter,setCounter] = useState([
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
    ])

    return(
        <>
            <div className='brand-wrapper'>
                <button id='start' onClick={handleClickScroll}>
                    <span className="material-symbols-outlined">
                        arrow_back_ios_new
                    </span>
                </button>
                <div className="scrollmenu">
                    {counter.map(m => (
                        <div className='item' key={m}>
                            <img src={imgg} id={`img-`+m} />
                        </div>
                    ))}
                </div>
                <button id='end' onClick={handleClickScroll}>
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
        </>
    )
}

export default Brasnd;