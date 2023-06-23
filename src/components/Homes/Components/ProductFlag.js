import './ProductFlag.scss'
import superdel from '../../../images/icon-home/super_deal.svg'
import Item from './Item';

function ProductFlag(props) {
    const { product, name} = props;
    
    return(
        <>
            <div className='product-wrapper'>
                <div className='content'>
                    <div className='title'>
                        <div className='title-font'>
                            <img src={superdel}></img>
                            <h4>{name}</h4>
                        </div>
                        <div className='title-back'>
                            <p>
                                SEE MORE
                            </p>
                            <span class="material-symbols-outlined">
                                    arrow_circle_right
                            </span>
                        </div>
                    </div>
                    <div className='product-box'>

                        {product.map(item => (
                            <Item key={item.id} item={item}/>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFlag;