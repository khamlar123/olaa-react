import './Menue.scss';
import { useState} from 'react';
function Menue() {
    const [openMenue,setOpenMwenu] = useState(false);
    const [menueList,setMenueList] = useState([
        {id: 1, name: 'ຄອມພິວເຕີ', icon: '', parentId: 0, url:''},
        {id: 2, name: 'ອຸປະກອນອີເລັກໂທຣນິກ', icon: '', parentId: 0, url:''},
        {id: 3, name: 'ເຄື່ອງໃຊ້ໄຟຟ້າ', icon: '', parentId: 0, url:''},
        {id: 4, name: 'ສຸຂະພາບ ແລະ ຄວາມງາມ', icon: '', parentId: 0, url:''},
        {id: 5, name: 'ເຄື່ອງໃຊ້ໃນເຮືອນ ແລະ ອຸປະກອນຈັດສວນ', icon: '', parentId: 0, url:''},
        {id: 6, name: 'ເຄື່ອງມືຊ່າງ', icon: '', parentId: 0, url:''},
        {id: 7, name: 'ອຸປະກອນສຳລັບຫ້ອງການ ແລະ ຮ້ານຄ້າ', icon: '', parentId: 0, url:''},
        {id: 8, name: 'ເຄື່ອງແຕ່ງກາຍ ແລະ ກະເປົ໋າ', icon: '', parentId: 0, url:''},
        {id: 9, name: 'ອາຫານ', icon: '', parentId: 0, url:''},
        {id: 10, name: 'ສິນຄ້າລ້າງສະຕ໊ອກ', icon: '', parentId: 0, url:''},
        {id: 11, name: 'ຈໍພາບ', icon: '', parentId: 1, url:''},
        {id: 12, name: 'cccccc', icon: '', parentId: 11, url:''},
        {id: 13, name: 'dddddd', icon: '', parentId: 11, url:''},
        {id: 14, name: 'eeeeee', icon: '', parentId: 11, url:''},
        {id: 15, name: 'ຈໍພາບxxxx', icon:'../../../images/icon-home/PT-C01D.png', parentId: 1, url:''},
        {id: 16, name: 'uuuuuu', icon: '', parentId: 15, url:''},
    ]);
    const [subMenu,setSubmenu] = useState([]);

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
                            <a href='#' className='main-item' key={item.id} onMouseOver={() => openSub(item.id)}> 
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {openMenue && subMenu.length > 0 ?      
                        <div className='sub-menue' >
                            {subMenu.map((m) => (
                                <div className='sub-item sub-clum' key={m.id}>
                                    <h5>{m.name}</h5>
                                    {getSub3(m.id).length == 0 && m.icon ? <img src={m.icon} alt={`Image ${m.id}`} />: <></>}
                                    {getSub3(m.id).map((mm) => 
                                        (
                                            <a href='#' className='sub-item' key={mm.id}>{mm.name}</a>
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