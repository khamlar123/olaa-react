import './Footer.scss';
import bcel from '../../images/footer-icon/bcel.png'
import yes from '../../images/footer-icon/yes.png'
import ac from '../../images/footer-icon/acleda.png'
import qr from '../../images/footer-icon/kk.png'
import lv from '../../images/footer-icon/lao-v.png'
import m from '../../images/footer-icon/maruhan.png'
import jdb from '../../images/footer-icon/jdb.png'
import ib from '../../images/footer-icon/ib.png'
import fb from '../../images/footer-icon/facebook.png'
import yu from '../../images/footer-icon/youtube.png'
import ig from '../../images/footer-icon/inst.png'

function Footer() {
return (
    <>
        <div className="footer-wrapper">
            <div className="container">
                <div className="footer-conent">
                    <div className="item content-column">
                        <h5>ກ່ຽວກັບ ໂອລາ</h5>
                        <a href="#" className="">ຊ່ອງທາງການຕິດຕໍ່</a>
                        <a href="#" className="">ວິທີການສັ່ງຊື້</a>
                    </div>
                    <div className="item content-column">
                        <h5>ພະແນກບໍລິການລູກຄ້າ</h5>
                        <a href="#" className="">ນະໂຍບາຍ ແລະ ເງື່ອນໄຂການສັ່ງຊື້ສິນຄ້າ</a>
                        <a href="#" className="">ຊ່ອງທາງການຊຳລະເງິນ</a>
                        <a href="#" className="">ເງື່ອນໄຂການຈັດສົ່ງສິນຄ້າ</a>
                        <a href="#" className="">ການຮັບປະກັນ ແລະ ນະໂຍບາຍ ອິນສະຕ໋ອກ</a>
                        <a href="#" className="">ຊ່ອງທາງການຜ່ອນສິນຄ້າ</a>
                    </div>
                    <div className="item has-icon">
                        <h5>ວີທີການຊຳລະຄ່າສິນຄ້າ</h5>
                        <div className='icons'>
                            <div className='icon'>
                                <img src={bcel} alt="img"></img>
                            </div>
                            <div className='icon'>
                                <img src={yes} alt="img"></img>
                            </div>
                            <div className='icon'>
                                <img src={ac} alt="img"></img>
                            </div>
                            <div className='icon'>
                                <img src={qr} alt="img"></img>
                            </div>
                            <div className='icon'>
                                <img src={lv} alt="img"></img>
                            </div>
                            <div className='icon'>
                                <img src={m} alt="img"></img>
                            </div>
                            <div className='icon'>
                                <img src={ib} alt="img"></img>
                            </div>
                            <div className='icon'>
                                <img src={jdb} alt="img"></img>
                            </div>    
                        </div> 
                    </div>
                    <div className="item has-icon">
                    <h5>ຕິດ​ຕາມ​ພວກ​ເຮົາ</h5>
                        <div className='icons'>
                            <div className='icon'>
                                <img src={fb} alt="img"></img>
                            </div>
                            <div className='icon'>
                                <img src={yu} alt="img"></img>
                            </div>
                            <div className='icon'>
                                <img src={ig} alt="img"></img>
                            </div>
                        </div> 
                    </div>
                    <div className="item content-column">
                        <h5>ທີ່ຕັ້ງຮ້ານ</h5>
                        <a href="#" className="">ສູນການຄ້າອາຊຽນມໍ ຕຶກ F9</a>
                        <a href="#" className="">ບ້ານໂພນທັນ, ເມືອງໄຊເສດຖາ</a>
                        <a href="#" className="">ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ</a>
                    </div>
                </div>

                <div className="footer-liscen">
                    <label>Copyright © 2020 Olaa.la. All rights Reserved. Design by Olaa Group.</label>
                </div>
            </div>
        </div>
    </>
)
}

export default Footer;