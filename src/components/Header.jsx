import React from 'react';
import mainImage from '../assets/photo_2021-10-15_16-00-07.jpg';
import './header.css'

 
function Header() {
    return (
        <nav>
            <ul className="nav-ul">
                <li className="li-img"><img src={mainImage} alt="" /></li>
                <li className="li-item"><a className="li-link" href="">Фото</a></li>
                <li className="li-item"><a className="li-link" href="">Иллюстрации</a></li>
                <li className="li-item"><a className="li-link" href="">Векторы</a></li>
                <li className="li-item"><a className="li-link" href="">Видео</a></li>
                <li className="li-item"><a className="li-link" href="">Музыка</a></li>
                <li className="li-item"><a className="li-link" href="">Sound effects</a></li>
                <li className="li-item "><a className="li-link" href="#">Войти</a></li>
                <li className="li-item"><a className="li-link" href="#">Присоединиться</a></li>
                <li className="li-btn"><button> Загрузить фотографии</button></li>
            </ul>
        </nav>
    )
}
export default Header;