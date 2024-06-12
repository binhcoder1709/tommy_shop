import { Link } from "react-router-dom";
import ListProduct_1 from "../../../../components/ListProduct_1";

export default function BestSellerProduct() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-[5px] h-[25px] bg-orange-600"></span>
            <h1 className="text-3xl font-bold">Sản phẩm bán chạy</h1>
          </div>
          <div>
            <Link
              to={"#"}
              className="p-2 text-orange-600 px-3 border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition"
            >
              Xem thêm
            </Link>
          </div>
        </div>
        <div>
            <ListProduct_1/>
        </div>
      </div>
    </>
  );
}
