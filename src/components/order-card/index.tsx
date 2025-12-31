import React from "react";
import { ColorStatus, OrderItem } from "./card.interface";

interface Props {
  item: OrderItem;
}

const OrderCard = ({ item }: Props) => {
  const renderStatusOrder = () => {
    switch (item.status) {
      case "pending":
        return "Đang xử lý";
      case "processing":
        return "Đang giao";
      default:
        return "Đã giao";
    }
  };

  const statusStyle = ColorStatus.find((sts) => sts.label === item.status);

  return (
    <div className="border border-gray-200 rounded-xl p-3 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="text-gray-400 font-semibold text-sm">
          Ngày đặt: {item.createdAt}
        </div>

        <div
          className="rounded-full px-3 py-1 text-sm font-semibold"
          style={{
            color: statusStyle?.color,
            backgroundColor: statusStyle?.bgColor,
          }}
        >
          {renderStatusOrder()}
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <div className="flex gap-3">
          <img
            src={item.products[0].thumbnail}
            alt=""
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="mt-2">
            <p className="font-semibold">{item.products[0].name}</p>
            <p className="text-sm text-gray-500 font-semibold">
              Số lượng: {item.products[0].quantity}
            </p>
          </div>
        </div>

        <div className="mt-3">
          <p className="font-bold">{item.products[0].price} đ</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;