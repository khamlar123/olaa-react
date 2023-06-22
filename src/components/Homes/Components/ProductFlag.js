import './ProductFlag.scss'
import superdel from '../../../images/icon-home/super_deal.svg'

function ProductFlag() {
    return(
        <>
            <div className='product-wrapper'>
                <div className='content'>
                    <div className='title'>
                        <div className='title-font'>
                            <img src={superdel}></img>
                            <h4>Super Deals</h4>
                        </div>
                        <div className='title-back'>
                            <p>
                                SEE MORE
                                
                            </p>
                        </div>

                    </div>
                    <div className='product-box'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFlag;