export const dataOptions: IOption[] = [
  {
    _id: 1,
    label: "Gaming",
    value: "GAMING",
  },
  {
    _id: 2,
    label: "Văn phòng",
    value: "OFFICE",
  },
  {
    _id: 3,
    label: "Đồ hoạ",
    value: "DESIGN",
  },
  {
    _id: 4,
    label: "Sinh viên",
    value: "STUDENT",
  },
];

export interface IOption {
  _id: string | number;
  label: string;
  value: string;
}

interface ISpec {
  cpu: string;
  ram: string;
  storage: string;
  gpu: string;
}

export interface IProduct {
  _id: number;
  name: string;
  image?: string;
  thumbnail?: string;
  discount: number;
  price: number;
  oldPrice: number;
  isHot: boolean;
  // specs: {
  //   cpu: string,
  //   ram: string,
  //   storage: string,
  //   gpu: string,
  // },
  specs: ISpec;
  brand: string;
  category: string;
  quantity?: number;
  createdAt?: string;
}
