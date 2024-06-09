import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <>
      <div className="w-full p-[5px] bg-[#e45e16] flex items-center justify-between px-10 pr-32">
        <div>
          <span className="text-white">Chào mừng bạn đến với Tommy Shop</span>
        </div>
        <div className="flex text-white">
          <Link to={"#"}>Đăng ký</Link>
          <span>/</span>
          <Link to={"#"}>Đăng nhập</Link>
        </div>
      </div>
    </>
  );
}
