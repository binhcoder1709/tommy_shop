import { Checkbox } from "antd";

export default function SearchByPrice() {
  return (
    <>
      <div className="flex flex-col">
        <Checkbox>Giá dưới 100000</Checkbox>
        <Checkbox>Giá từ 100000 - 200000</Checkbox>
        <Checkbox>Giá từ 200000 - 500000</Checkbox>
        <Checkbox>Giá từ 500000 - 1000000</Checkbox>
      </div>
    </>
  );
}
