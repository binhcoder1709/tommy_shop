import { faCartShopping, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../../assets/logos/tommyshop.png";
import { Input } from "antd";

export default function BottomHeader() {
  const {Search} = Input
  return (
    <>
      <div className="w-full flex items-center justify-center border-b-2  gap-10">
        <div className="flex items-center gap-2">
          <div>
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">Hotline</span>
            <span>19001010</span>
          </div>
        </div>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex items-center gap-2">
          <Search placeholder="Tìm kiếm sản phẩm"/>
          <FontAwesomeIcon icon={faCartShopping}  className="text-xl"/>
        </div>
      </div>
    </>
  );
}
