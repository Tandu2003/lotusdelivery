import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Header = () => {
  const [isShowLocation, setIsShowLocation] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const location = [
    {
      id: 1,
      province: "Hồ Chí Minh",
      districts: [
        {
          id: 1,
          district: "Quận 1",
          address: [
            {
              id: 1,
              name: "CoCo Ichibanya 13 Lý Tự Trọng 13 Lý Tự Trọng, Phường Bến Nghé, Quận 1",
            },
            {
              id: 2,
              name: "Marukame Udon Bến Thành 215-217 Lý Tự Trọng, P.Bến Thành, Q.1, Phường Bến Thành, Quận 1",
            },
            { id: 3, name: "Conservo tầng trệt 13 Lý Tự Trọng, Phường Bến Nghé, Quận 1" },
            {
              id: 4,
              name: "Yoshinoya 13 Lý Tự Trọng Tầng 2, 13 Lý Tự Trọng, Phường Bến Nghé, Quận 1",
            },
            { id: 5, name: "Bánh Mì Huỳnh Hoa 26 Lê Thị Riêng, Phường Phạm Ngũ Lão, Quận 1" },
            {
              id: 6,
              name: "Marukame Udon Tân Định 342 - 344 Hai Bà Trưng, Phường Tân Định, Quận 1",
            },
            { id: 7, name: "CoCo Ichibanya Bến Thành 256 Lê Thánh Tôn, Phường Bến Thành, Quận 1" },
          ],
        },
        {
          id: 2,
          district: "Quận 10",
          address: [
            {
              id: 1,
              name: "Marukame Udon - Vạn Hạnh Mall Tầng 6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phường 12, Quận 10",
            },
          ],
        },
        {
          id: 3,
          district: "Quận Bình Thạnh",
          address: [
            {
              id: 1,
              name: "CoCo Ichibanya Landmark 81 Tầng L2 TTTM Vincom Center Landmark 81, Số 772 ĐIện Biên Phủ, Phường 22, Quận Bình Thạnh  ",
            },
          ],
        },
        {
          id: 4,
          district: "Thành Phố Thủ Đức",
          address: [
            {
              id: 1,
              name: "Marukame Udon Thảo Điền 27 Thảo Điền, Phường Thảo Điền, Thành phố Thủ Đức",
            },
          ],
        },
      ],
    },
  ];

  const locationDefault = location[0].districts[2].address[0].name;

  const handleShowLocation = () => {
    setIsShowLocation(!isShowLocation);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <Link to="/" className="header-logo">
            <img
              src="https://res.cloudinary.com/dflpparty/image/upload/v1730997520/LotusDelivery/logo_lotus_delivery.webp"
              alt="logo"
            />
          </Link>
          <div className="header-left_location" onClick={() => handleShowLocation()}>
            <img
              src="https://res.cloudinary.com/dflpparty/image/upload/v1731000771/LotusDelivery/location_tdgkj8.svg"
              alt="location"
            />
            <div className="location-content">
              <span>Giao hàng tới:</span>
              <b>{locationDefault}</b>
            </div>
          </div>
        </div>

        <div className="header-center">
          <form action="/search">
            <button>
              <img
                src="https://res.cloudinary.com/dflpparty/image/upload/v1731000772/LotusDelivery/search_f1abu5.svg"
                alt="search"
              />
            </button>
            <input name="q" type="text" placeholder="Nhập từ khóa tìm kiếm" />
          </form>
        </div>

        <div className="header-right">
          <Link to="/cart" className="header-right_cart">
            <img
              src="https://res.cloudinary.com/dflpparty/image/upload/v1731000771/LotusDelivery/cart_bsfhz0.svg"
              alt="cart"
            />
            <span>Giỏ hàng</span>
            <b>{cartItemsCount}</b>
          </Link>
          <Link to="/account" className="header-right_user-account">
            <img
              src="https://res.cloudinary.com/dflpparty/image/upload/v1731000772/LotusDelivery/user-accont_s1zftr.svg"
              alt="user-account"
            />
            <span>Đăng nhập</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
