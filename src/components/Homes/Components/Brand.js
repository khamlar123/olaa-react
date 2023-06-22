import './Brand.scss'
import imgg from '../../../images/slider/S100_3000ຍອ_01.jpg'
import { useState } from 'react';

function Brasnd() {

    const [counter,setCounter] = useState([
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
    ])

    return(
        <>
            <div class="scrollmenu">
                {counter.map(m => (
                    <div className='item'>
                        <img src={imgg}></img>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Brasnd;