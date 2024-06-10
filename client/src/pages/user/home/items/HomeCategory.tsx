import { CSSProperties } from "react";
import CarouselItem from "../../../../components/CarouselItem";
import MenuList from "../../../../components/MenuList";

export default function HomeCategory() {
  // menu list item
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

  // carousel items
  const carouselItems = [
    {
      imageSource:
        "https://firebasestorage.googleapis.com/v0/b/tommy-studio-93d6f.appspot.com/o/download.jpg?alt=media&token=e497e98c-307b-420d-8ddd-4bdf2b7f1219",
    },
    {
      imageSource:
        "https://firebasestorage.googleapis.com/v0/b/tommy-studio-93d6f.appspot.com/o/download.jpg?alt=media&token=e497e98c-307b-420d-8ddd-4bdf2b7f1219",
    },
    {
      imageSource:
        "https://firebasestorage.googleapis.com/v0/b/tommy-studio-93d6f.appspot.com/o/download.jpg?alt=media&token=e497e98c-307b-420d-8ddd-4bdf2b7f1219",
    },
    {
      imageSource:
        "https://firebasestorage.googleapis.com/v0/b/tommy-studio-93d6f.appspot.com/o/download.jpg?alt=media&token=e497e98c-307b-420d-8ddd-4bdf2b7f1219",
    },
  ];

//   style of carousel item
const carouselStyle:CSSProperties = {
    // height: "100px"
    width: "10px"
}
  return (
    <>
      <div className="flex items-center">
        {/* category list */}
        <div>
          <MenuList menuListItem={menuListItems} />
        </div>
        {/* slide */}
        <div>
          <CarouselItem carouselItem={carouselItems} contentStyle={carouselStyle}/>
        </div>
      </div>
    </>
  );
}
