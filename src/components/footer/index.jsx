import React from "react";
import { FaInstagram, FaTelegram, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* About Section */}
        <div>
          <h3 className="font-semibold text-lg">Biz haqimizda</h3>
          <ul className="mt-2 space-y-1 text-gray-500">
            <li>Topshirish punktlari</li>
            <li>Vakansiyalar</li>
          </ul>
        </div>

        {/* Users Section */}
        <div>
          <h3 className="font-semibold text-lg">Foydalanuvchilarga</h3>
          <ul className="mt-2 space-y-1 text-gray-500">
            <li>Biz bilan bog‘lanish</li>
            <li>Savol-Javob</li>
          </ul>
        </div>

        {/* Business Section */}
        <div>
          <h3 className="font-semibold text-lg">Tadbirkorlarga</h3>
          <ul className="mt-2 space-y-1 text-gray-500">
            <li>Uzumda soting</li>
            <li>Sotuvchi kabinetiga kirish</li>
          </ul>
        </div>

        {/* App Download & Socials */}
        <div>
          <h3 className="font-semibold text-lg">Ilovani yuklab olish</h3>
          <div className="flex space-x-4 mt-2">
            <img src="/appstore.png" alt="AppStore" className="h-8" />
            <img src="/googleplay.png" alt="Google Play" className="h-8" />
          </div>
          <h3 className="font-semibold text-lg mt-4">
            Uzum ijtimoiy tarmoqlarda
          </h3>
          <div className="flex space-x-3 mt-2 text-xl">
            <FaInstagram className="text-pink-500 hover:text-pink-600 transition" />
            <FaTelegram className="text-blue-500 hover:text-blue-600 transition" />
            <FaYoutube className="text-red-500 hover:text-red-600 transition" />
            <FaFacebook className="text-blue-700 hover:text-blue-800 transition" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-8 pt-4 text-center text-gray-500 text-xs">
        «2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
        himoyalangan»
      </div>
    </footer>
  );
};

export default Footer;
