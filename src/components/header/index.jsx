import React from "react";
import location from "../../assets/svg/location.svg";
import country from "../../assets/svg/country.svg";
import logoimg from "../../assets/svg/logo.svg";
import katalog from "../../assets/img/catalog.png";
import search from "../../assets/svg/search.svg";
import user from "../../assets/svg/user.svg";
import bucket from "../../assets/svg/bucket.svg";
import heart from "../../assets/svg/heart.svg";
import credit from "../../assets/img/credit.png";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-[#f2f4f7]">
        <div className="container1 flex items-center justify-between py-2">
          <div className="flex items-center justify-between gap-10 text-[14px] font-medium">
            <Link className="flex items-end gap-1">
              <img src={location} alt="" />
              Shahar:
              <span className="underline"> Toshkent</span>
            </Link>
            <Link>Topshirish punktlari</Link>
          </div>
          <Link className="text-[#8b8e99] text-[14px] font-normal">
            Buyurtmangizni 1 kunda bepul yetkazib beramiz!
          </Link>
          <div className="text-[14px] font-normal flex items-center gap-3">
            <Link>Savol-javoblar</Link>
            <Link>Buyurtmalarim</Link>
            <select name="" id="">
              <option className="flex items-center gap-5" value="">
                Оʻzbekcha
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="container1 flex items-center justify-between py-[18px] gap-3">
        <Link to={"/"}>
          <img src={logoimg} alt="" />
        </Link>
        <div className="flex items-center gap-4 w-[40%]">
          <button className="flex w-[20%] items-center gap-2 p-3 bg-[#f0f0ff] transition-all hover:bg-[#d8d8d8] rounded-lg">
            <img src={katalog} alt="" />
            <p className="text-[#7000ff]">Katalog</p>
          </button>
          <div className="  flex items-center w-[80%] justify-between border rounded-lg">
            <input
              className="w-full h-full px-4 py-3"
              type="text"
              placeholder="Mahsulotlar va turkumlar izlash"
            />
            <button className="h-full bg-[#f6f6f6] px-4 py-3 rounded-r-lg">
              <img src={search} alt="" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2">
            <img src={user} alt="" />
            <p>Kirish</p>
          </Link>
          <Link className="flex items-center gap-2">
            <img src={heart} alt="" />
            <p>Saralangan</p>
          </Link>
          <Link className="flex items-center gap-2">
            <img src={bucket} alt="" />
            <p>Savat</p>
          </Link>
        </div>
      </div>
      <div className=" py-[10px]">
        <div className="flex items-center justify-between container1 gap-7">
          <ul className="flex items-center justify-between text-[14px] font-normal text-[#595b66] gap-5 w-full">
            <li className="types">
              <Link className={"flex items-center justify-center gap-3"} s>
                <img src={credit} alt="" />
                <p>Muddatli to'lov</p>
              </Link>
            </li>
            <li className="types">
              <Link to={"/elektronika"}>Elektronika</Link>
            </li>
            <li className="types">
              <Link>Maishiy texnika</Link>
            </li>
            <li className="types">
              <Link>Kiyim</Link>
            </li>
            <li className="types">
              <Link>Poyabzallar</Link>
            </li>
            <li className="types">
              <Link>Aksessuarlar</Link>
            </li>
            <li className="types">
              <Link>Goʻzallik va parvarish</Link>
            </li>
            <li className="types">
              <Link>Salomatlik</Link>
            </li>
            <li className="types">
              <Link>Uy-roʻzgʻor buyumlari</Link>
            </li>
            <li className="types">
              <Link>Qurilish va taʼmirlash</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
