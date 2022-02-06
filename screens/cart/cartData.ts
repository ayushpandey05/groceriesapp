import {
  BellPepperLogo,
  EggChickenLogo,
  GingerLogo,
  OrganicBananaLogo,
} from '../../assets/images/cart';

const cartData = [
  {
    label: 'Bell Pepper Red',
    info: '1kg, Price',
    logo: BellPepperLogo,
    price: '4.99',
    pricePrefix: '$',
    quantity: 1,
  },
  {
    label: 'Egg Chicken Red',
    info: '4pcs, Price',
    logo: EggChickenLogo,
    price: '1.99',
    pricePrefix: '$',
    quantity: 1,
  },
  {
    label: 'Organic Bananas',
    info: '12kg, Price',
    logo: OrganicBananaLogo,
    price: '3.00',
    pricePrefix: '$',
    quantity: 1,
  },
  {
    label: 'Ginger',
    info: '250gm, Price',
    logo: GingerLogo,
    price: '2.99',
    pricePrefix: '$',
    quantity: 1,
  },
];

export default cartData;
