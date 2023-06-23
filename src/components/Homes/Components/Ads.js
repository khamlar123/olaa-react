import './Ads.scss'
function Ads(props) {
    const {img} = props;

    return(
        <>
            <div className="ads-wrapper">
                <img src={img} alt="img"/>
            </div>
        </>
    );
}

export default Ads;