import ListProduct_1 from "../../../components/ListProduct_1";
import MenuList from "../../../components/MenuList";
import SelectOption from "../../../components/SelectOption";
import SearchByPrice from "./items/SearchByPrice";

export default function Product() {
  const menuListItems = [
    {
      key: "newProduct",
      label: "Sản phẩm mới ra mắt",
      children: [
        {
          key: "1-1",
          label: "Quần áo nam",
          type: "group",
          children: [
            { key: "1", label: "Áo thun" },
            { key: "2", label: "Quần âu" },
          ],
        },
        {
          key: "1-2",
          label: "Quần áo nữ",
          type: "group",
          children: [
            { key: "3", label: "Áo sơ mi" },
            { key: "4", label: "Quần vải" },
          ],
        },
      ],
    },
    {
      key: "maleProduct",
      label: "Thời trang nam",
      children: [
        {
          key: "1-1",
          label: "Áo sơ mi",
          type: "group",
          children: [
            { key: "1", label: "Áo sơ mi dài tay" },
            { key: "2", label: "Áo sơ mi ngắn tay" },
          ],
        },
        {
          key: "1-2",
          label: "Áo thun",
          type: "group",
          children: [
            { key: "3", label: "Áo thun trắng" },
            { key: "4", label: "Áo thun màu" },
          ],
        },
        {
          key: "1-2",
          label: "Quần tây",
          type: "group",
          children: [
            { key: "3", label: "Quần tây tối màu" },
            { key: "4", label: "Quần tây sáng màu" },
          ],
        },
      ],
    },
    {
      key: "femaleProduct",
      label: "Thời trang nữ",
      children: [
        {
          key: "1-1",
          label: "Áo sơ mi nữ",
          type: "group",
          children: [
            { key: "1", label: "Áo sơ mi ngắn tay" },
            { key: "2", label: "Áo sơ mi dài tay" },
          ],
        },
        {
          key: "1-2",
          label: "Giày cao gót",
          type: "group",
          children: [
            { key: "3", label: "Giày cao gót đen" },
            { key: "4", label: "Giày cao gót màu sáng" },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <div className="p-6 flex gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="w-[5px] h-[25px] bg-orange-600"></span>
            <h1 className="text-2xl font-bold">Danh mục sản phẩm</h1>
          </div>
          <div>
            <MenuList menuListItem={menuListItems} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-[5px] h-[25px] bg-orange-600"></span>
              <h1 className="text-2xl font-bold">Tìm kiếm theo giá</h1>
            </div>
            <SearchByPrice />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 justify-between">
            {/* <span className="w-[5px] h-[25px] bg-orange-600"></span> */}
            <h1 className="text-2xl font-bold">Sản phẩm</h1>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Lọc theo</span>
              <SelectOption />
            </div>
          </div>
          <div>
            <ListProduct_1 />
          </div>
        </div>
      </div>
    </>
  );
}
