const products = [
  {
    id: "B01MZ6OB21",
    name: "Skullcandy SCS2DUFZ-385",
    cost: 7
  },
  {
    id: "B07HBD65YR",
    name: "Skullcandy Riff S5PXW-L003",
    cost: 65.2
  },
  {
    id: "B01MZ6OB44",
    name: "WD MyBook 8Tb Hard Drive",
    cost: 268
  },
  {
    id: "B073SBQMCX",
    name: "WD Blue 1Tb Internal Drive",
    cost: 192
  },
  {
    id: "B01LXTH17U",
    name: "WD MyCloud EX Ultra 8Tb Bay",
    cost: 486
  },
  {
    id: "B073JHHNJ9",
    name: "Netgear Nighthawk AC1900",
    cost: 60
  },
  {
    id: "B07L3G9VHK",
    name: "Netgear Orbi RBR 20",
    cost: 145
  }
];

const getProducts = () => new Promise(resolve => resolve(products));

export default getProducts;
