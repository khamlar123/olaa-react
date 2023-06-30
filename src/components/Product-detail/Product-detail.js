import './Product-detail.scss'
import { useState } from 'react';
import img from '../../images/slider/S100_3000ຍອ_01.jpg'
function ProductDetail() {
    const [selSize, setSelSize] = useState(0);
    const [selColor, setColor] = useState(0);
    const [sizeList, setSizeList] = useState([
        { id: 1, name: '12+512GB', parentId: 1, },
        { id: 2, name: '12+256GB', parentId: 1, },
        { id: 3, name: '12+128GB', parentId: 1, },
        { id: 4, name: 'Red', parentId: 2, },
        { id: 5, name: 'Green', parentId: 2, },
        { id: 6, name: 'gainsboro', parentId: 2, },
        { id: 7, name: 'orange', parentId: 2, },
    ]);

    function CurrencyFormat(value, format, option) {
        const formatter = new Intl.NumberFormat(option, {
            style: 'currency',
            currency: format,
        });

        return (
            formatter.format(value)
        );
    }

    function getVariant(option) {
        return sizeList.filter(f => f.parentId === option);
    }

    function getColorSty(color) {
        const sty = {
            background: color
        }
        return sty;
    }

    return (
        <>
            <div className="detail-wrapper">
                <div className='detail-container'>
                    <div className='img-wrapper'>
                        <div className='img-container'>
                            <div className='sub-img'>
                                <img src={img} />
                                <img src={img} />
                                <img src={img} />
                                <img src={img} />
                            </div>
                            <div className='main-img'>
                                <div className='main-color'>
                                    <img src={img} />
                                </div>

                                <div className='btn-option'>
                                    <button>
                                        <span class="material-symbols-outlined">
                                            arrow_back_ios
                                        </span>
                                    </button>
                                    <button>
                                        <span class="material-symbols-outlined">
                                            arrow_forward_ios
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
             
                    </div>

                    <div className='infor-wrapper'>
                        <div className='prod-name'>
                            <h3 className='title'>Redmi K60E Smartphone ໂທລະສັບມືຖື Chinese Version 12+256GB Xiaomi Green</h3>
                            <h3 className='price'>{CurrencyFormat(27900, 'CNY', 'zh-CN')} <span>{CurrencyFormat(700000, 'LAK', 'zh-CN')}</span> </h3>
                        </div>

                        <div className='prod-variant'>
                            <div className='variant-item bor-top'>
                                <label>Size: </label>
                                <div className='item'>
                                    {getVariant(1).map(m => (
                                        <button className={selSize == m.id ? 'action-btn' : ''} key={m.id} onClick={() => setSelSize(m.id)}>{m.name}</button>
                                    ))}
                                </div>
                            </div>

                            <div className='variant-item bor-top'>
                                <label>Color: </label>
                                <div className='item forcolor'>
                                    {getVariant(2).map(m => (
                                        <div className={selColor == m.id ? 'item-color active-item-color' : 'item-color'} onClick={() => setColor(m.id)} >
                                            <div className='color-color' style={getColorSty(m.name)}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='variant-item bor-top'>
                                <p>
                                    <span class="material-symbols-outlined">
                                        pending_actions
                                    </span>
                                    Delivery Time 7-14 Days info
                                    <span class="material-symbols-outlined">
                                        info
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='action'>
                            <dit className='btn-item'>
                                <button>Contact us</button>
                                <span class="material-symbols-outlined">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined">
                                    share
                                </span>
                            </dit>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;