import './Menue.scss';
import { useEffect, useState} from 'react';
import MenueList from '../../../data/menue';
import { Link } from "react-router-dom";
function Menue() {
    const [openMenue,setOpenMwenu] = useState(false);
    const [menueList,setMenueList] = useState([]);
    const [subMenu,setSubmenu] = useState([]);

    useEffect( () => {
            setMenueList(MenueList);
    }, []);

    function openSub(parentId) {
        setOpenMwenu(true)
        getSub2(parentId)
    }

    function closeSub() {
        setOpenMwenu(false)
    }

    function getManinMenu() {
        return menueList.filter(f => f.parentId === 0);
    }

    function getSub2(parentId) {
        let resx =  menueList.filter(f => f.parentId === parentId);
        setSubmenu(resx);
    }

    function getSub3(id) {
      return  menueList.filter(f => f.parentId == id)
    }

    return (
        <>
            <div className="menue-wrapper" >
                <div className='menue-content' onMouseLeave={closeSub} >
                    <div className='main-menue' >

                        {getManinMenu().map((item) => (
                            <Link to={`catgory/${item.id}`}  disabled={true}>
                                <a  className='main-item' key={item.id} onMouseOver={() => openSub(item.id)}> 
                                    {item.name}
                                </a>
                            </Link>
                        ))}
                    </div>

                    {openMenue && subMenu.length > 0 ?      
                        <div className='sub-menue' >
                            {subMenu.map((m) => (
                                <div className='sub-item sub-clum' key={m.id}>
                                    <h5>{m.name}</h5>
                                    {getSub3(m.id).length == 0 && m.icon ? 
                                        <Link  to={`catgory/${m.id}`}>
                                            <div className='img-wrapper'>
                                                <img src={m.icon} alt={`Image ${m.id}`} />
                                            </div>
                                        </Link>
                                    : <></>}
                                    {getSub3(m.id).map((mm) => 
                                        (
                                            <Link  to={`catgory/${mm.id}`}>
                                                <a  className='sub-item' key={mm.id}>{mm.name}</a>
                                            </Link>
                                        ))
                                    }
                                </div>
                            ))}
                        </div> : 
                       <></>
                    }
                </div>
            </div>
        </>
    );
}

export default Menue;