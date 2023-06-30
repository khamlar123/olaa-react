import './BreadCrumbs.scss'
function BreadCrumb(prop) {
    let url = prop.data.split("/")[3];
    return (
        <>
            <div className='crumbs-wrapper'>
                <div className='crumbs-container'>
                    <ul class="breadcrumbs">
                        <li><a href="/">Home</a></li>
                        <li class="active">{url}</li>
                    </ul>
                </div>
            </div>
         
        </>
    )
}

export default BreadCrumb;