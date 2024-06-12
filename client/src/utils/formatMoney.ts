const formatMoney = (x: number) => {
  return x.toLocaleString("vi", { style: "currency", currency: "VND" });
};

export default formatMoney;
