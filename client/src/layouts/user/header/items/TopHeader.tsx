import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

interface IPayload {
  user_id: string;
  email: string;
  iat: number;
  exp: number;
}

export default function TopHeader() {
  const [isLogin, setLogin] = useState<boolean>(false);
  let emailValue = "";

  const getToken = Cookies.get("AT");
  if (!getToken) {
    return;
  } else {
    const payloadDecode = jwtDecode<IPayload>(getToken);
    emailValue = payloadDecode.email;
    setLogin(true);
  }
  return (
    <>
      <div className="w-full p-[5px] bg-[#e45e16] flex items-center justify-between px-10 pr-32">
        <div>
          <span className="text-white">Chào mừng bạn đến với Tommy Shop</span>
        </div>
        {isLogin ? (
          <>
            <div className="flex ">
              <Link to={"/register"}>Đăng ký</Link>
              <span>/</span>
              <Link to={"/login"}>Đăng nhập</Link>
            </div>
          </>
        ) : (
          <span className="text-white">{emailValue}</span>
        )}
      </div>
      <span></span>
    </>
  );
}
