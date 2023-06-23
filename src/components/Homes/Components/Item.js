import './Item.scss'
function Item(props) {

    const {item} = props;

    function CurrencyFormat(value) {
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'LAK',
        });
      
        return (
            formatter.format(value)
        );
    }

    function formantNumber(value) {
        const formattedValue = value.toLocaleString('en-US', {
            minimumIntegerDigits: 1,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          });
        
          return (
              formattedValue
          ); 
    };

    function getFlagClass(value) {
        return (value === 'Hot'? 'hot': value === 'New'? 'new' :'super');
    }

    function getShipping(value) {
        return (value === 'CN' ? '7-14 Day': '3-5 Day') 
    }

    function hasStock(value) {
        return (value ? 'IN STOCK': '')
    }

    return (
        <>
            <div className='product-item' key={item.id}>
                <div className='img-wap'>
                    <img src={item.imgUrl} />
                    {!item.hasInStock ? <p className='sold-out'>Sold out</p> : <></>}

                </div>
                <div className='infor'>
                    <h5 className='name'>
                        {item.title}
                    </h5>

                    <div className='price'>
                        <p id='price'>{CurrencyFormat(item.price)}</p>
                        {item.discount > 0 ? <p id='dis'><del>{CurrencyFormat(item.discount)}</del> <span>{formantNumber(((item.price / item.discount) * 100) - 100)}%</span> </p> : <p id='dis'></p>}
                    </div>

                    <div className='flag'>
                        <span className={getFlagClass(item.flagName)}>{item.flagName}</span>
                        {item.perOrder ? getShipping(item.shipping) : <span className='ins'>{hasStock(item.hasInStock)}</span>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;