import React from "react";
import './main.css';

function Main() {
    return (
        <main>
          <h4>Невероятно красивые стоковые картинки <br /> бесплатно</h4>
          <p className="main-p1">Более 1 миллион изображний и видео высокого качества от нашего талантливого сообщества.</p>
          <div className="form">
                <input type="text" placeholder="Search images, videos and music"/>
                <select id="select" name="select">
                    <option value="Изображения">Изображения</option>
                    <option value="Фото">Фото</option>
                    <option value="Векторы">Векторы</option>
                    <option value="Иллюстрации">Иллюстрации</option>
                    <option value="Видео">Видео</option>
                    <option value="Музыка">Музыка</option>
                    <option value="Sound effect">Sound effect</option>
                    <option value="Параметры поиска">Параметры поиска</option>
                </select>
          </div>
          <p className="main-p2">Popular images: осень, коронавирус, фон, девушка, природа, дети, цветы, учитель, деньги, школа, телефон, кофе</p>
          <p className="main-p3">Бесплатные изображения lucythomasphotography</p>
    </main>
    )
}
export default Main;