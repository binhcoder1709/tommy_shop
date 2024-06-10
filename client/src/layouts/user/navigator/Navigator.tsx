import { NavLink } from "react-router-dom";

export default function Navigator() {
  return (
    <>
      <nav className="navigator w-full flex justify-center gap-5 border-b-2 p-2">
        <NavLink to={"/"}>TRANG CHỦ</NavLink>
        <NavLink to={"/products"}>SẢN PHẨM</NavLink>
        <NavLink to={"/promotions"}>KHUYẾN MẠI</NavLink>
        <NavLink to={"/news"}>TIN TỨC</NavLink>
        <NavLink to={"/contacts"}>LIÊN HỆ</NavLink>
      </nav>
    </>
  );
}
