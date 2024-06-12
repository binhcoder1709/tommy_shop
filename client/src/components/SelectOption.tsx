import { Select } from "antd";


export default function SelectOption() {
  return (
    <>
    <div>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    </div>
    </>
  )
}
