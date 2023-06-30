import './Submenue.scss'
import Menues from '../../../data/menue';
import { useState, useEffect } from 'react';
function Submenue() {
    const [menueList,setMenueList] = useState([]);
    const [openCat,setOpenCat] = useState(false);
    const [openSubMenue,setOpenSubMenu] = useState(false);
    const [subMenue,setSubmenu] = useState([]);

    useEffect(() => {
        setMenueList(Menues);
    },[]);

    function openCatFunc() {
        setOpenCat(true);
    }

    function closeSub() {
        setOpenCat(false);
    }
    
    function openSub(id) {
        setOpenSubMenu(true);
        getSub2Menu(id);
    }

    function getManinMenu() {
        return menueList.filter(f => f.parentId === 0);
    }

    function getSub2Menu(id) {
        let resx =  menueList.filter(f => f.parentId === id);
        setSubmenu(resx);
    }

    function getSub3(id) {
        return  menueList.filter(f => f.parentId == id)
      }

    return (
        <>
            <div className="submenue-wrapper">
                <div className='container'>
                    <div className='sub-item'>
                        <p id='main' onMouseOver={() => openCatFunc()}>
                            Categorys
                            <span className="material-symbols-outlined">
                                expand_less
                            </span>
                        </p>
                        {!openCat ? <></>: 
                            <div className='hover-menue' onMouseLeave={closeSub}>
                                {getManinMenu().map(m => (
                                    <div className='hover-item' key={m.id}>
                                        <a href={`catgory/${m.id}`} onMouseOver={() => openSub(m.id)}>{m.name}</a>
                                            {subMenue.length > 0 && openSubMenue ?
                                                   <div className='sub-hover'>
                                                   { subMenue.map(mm => (
                                                       <div className='sub-hover-item'>
                                                           <h5>{mm.name}</h5>
                                                           {getSub3(mm.id).length == 0 && mm.icon ?
                                                            <div className='img-wrapper'>
                                                                <a href={`catgory/${mm.id}`}><img src={mm.icon} alt={`Image ${mm.id}`} /></a>
                                                            </div>
                                                            : <></>}
                                                           {getSub3(mm.id).map(mmm => ( <a href={`catgory/${mmm.id}`} key={mmm.id}>{mmm.name}</a> )) 
                                                           }
                                                       </div>
                                                   ))}
                                               </div>
                                            :<></>}
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Submenue;