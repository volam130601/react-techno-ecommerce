export interface Product {
  id: string;
  title: string;
  price: number;
  discount: number;
  quantity: number;
  picture: string[];
  type: string;
  description?: string;
  star?: number;
  subtotal?: number;
}
export const dataProducts: Product[] = [
  {
    id: "1",
    title: "MacBook Pro 13.3in 2022",
    price: 999.99,
    discount: 50,
    quantity: 10,
    type: "Electronics",
    picture: [
      "https://zshop.vn/images/thumbnails/624/460/detailed/100/mbp-spacegray-select-202206_n0tn-f9.jpg",
      "https://zshop.vn/images/thumbnails/624/460/detailed/100/mbp-spacegray-gallery1-202206_mqsd-me.jpg",
    ],
    star: 4.5,
    subtotal: 4999.95,
  },
  {
    id: "2",
    title: "Smartphone",
    price: 399.99,
    discount: 10,
    quantity: 20,
    type: "Electronics",
    picture: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQzlwx6vi0pzw_9_nPz9L6qCU7ITQ_FKXA2Bq3tLjWS59kjeQgGUkWfNRKDdLnpgwHhhfAWRuoDXnLyVRrMFOfzrenE8jFaJoBru50E83JzUpmZ3f-sNyFRLC2dMGCuGf3vl3d7bxcv_cY&usqp=CAc",
      "phone_image2.jpg",
    ],
    star: 4.2,
    subtotal: 3599.91,
  },
  {
    id: "3",
    title: "Running Shoes",
    price: 79.99,
    discount: 0,
    quantity: 15,
    type: "Apparel",
    picture: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQp4gWM19SkooOBwujREl1TwaQ9YD5JVI75VxD2tz4Nco23m-D5a2T6HP0ASp1FjnILklaHNGutyDe3hMsG_fVoacVhWvmnet43MqMLkojhgBY4zTnUx1l14MOTrt_FrPMA-MJDX5ALtt4&usqp=CAc",
    ],
    star: 4.7,
    subtotal: 1199.85,
  },
  {
    id: "4",
    title: "Headphones",
    price: 49.99,
    discount: 20,
    quantity: 30,
    type: "Electronics",
    picture: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcThnfRKlizcoH4P7IMGV0-rLIj8ouqvJD_p3573FiyNCicIMn7T3DiEPPKHJ-uh0qKg4KlGZZENr5qlB537c0ouYztYJFkpEiuXPkVrpHG5RB2cmStBvui9KKFIFwR9ijQ7ha3MDCHnjk0&usqp=CAc",
      "headphones_image2.jpg",
    ],
    star: 4.0,
    subtotal: 1199.7,
  },
  {
    id: "5",
    title: "Coffee Maker",
    price: 129.99,
    discount: 5,
    quantity: 8,
    type: "Appliances",
    picture: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQIcnXna48J9SvcpPc7uOTNRtOINQ3mTdsynJ_mMY4nnB-MNnAPWZka7uVb5p9wnvzZ3sInEAmrUTPQA_V5iOFZMbdzn01cOqVXvBnUd6M7eGmdFMDnyZNlEU0aHn0B0_7sb3RDhT0Zdlk&usqp=CAc",
    ],
    star: 4.6,
    subtotal: 1234.95,
  },
  {
    id: "6",
    title: "Hiking Boots",
    price: 149.99,
    discount: 15,
    quantity: 12,
    type: "Apparel",
    picture: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIav5iYdU5OYtKsisTLr2hAGCiAtoTfYZvLLS4STP2d8II_YDwH1BMw0IOCN3b65wuxDLzyS9doaGSq1zHUWAhAxEpMj50h7aaRDAn8du04A_AYWsfDhrTjdphcfytG3tuICGvJQ&usqp=CAc",
    ],
    star: 4.3,
    subtotal: 1919.88,
  },
  {
    id: "7",
    title: "Tablet",
    price: 299.99,
    discount: 0,
    quantity: 5,
    type: "Electronics",
    picture: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjmeTjue2TQhT3lUDW26bv4v8tPcGURhUIvjrnnopdJdCzDQ6smuRIVCmsKbaBiHdtSpEUEaLrOwqr3oNcQ8C-sfAseuENhcP36TFAx29BXli36Vt1l12Niteu&usqp=CAc",
    ],
    star: 4.4,
    subtotal: 1499.95,
  },
  {
    id: "8",
    title: "Sunglasses",
    price: 59.99,
    discount: 10,
    quantity: 25,
    type: "Apparel",
    picture: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLnpD23CKQNATQO1GX-UGV4mo3wQ3osuhU48IF8BVwA&s",
    ],
    star: 4.8,
    subtotal: 1349.85,
  },
  {
    id: "9",
    title: "Gaming Console",
    price: 399.99,
    discount: 30,
    quantity: 7,
    type: "Electronics",
    picture: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhEAu49svTpbMQrE4djJ6yIz1OXaRENNyH_ElWdGViVpxjyFk35PmHOd1GYzhU-QEyhvZh-zKzvQPSVaR7LItS5aUSQiaEeQOdNtURp7igpZCghAssEhwSoLgOBMUHkWHoPZ7Q4A&usqp=CAc",
    ],
    star: 4.7,
    subtotal: 2799.93,
  },
  {
    id: "10",
    title: "Backpack",
    price: 59.99,
    discount: 0,
    quantity: 18,
    type: "Accessories",
    picture: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-nS25h7TyHEGnT6DdAF4kpBl8Xug0G_Qq2DXofJRUxRi46P_M97MSLu3ImerA784wWrUgH2ItMp_GMQ1vfV2IuQboslCn0iH3f9BIoT9-o5b_GUfjJ1TvsdWipwlxHDZFIju4hFGE7XY&usqp=CAc",
    ],
    star: 4.2,
    subtotal: 1079.82,
  },
];

export interface CartEntity {
  id: string;
  title: string;
  price: number;
  discount: number;
  quantity: number;
  picture: string[];
  type: string;
  description?: string;
  star?: number;
  subtotal?: number;
}

function productToCart(product: Product): CartEntity {
  return {
    ...product,
  };
}
export default productToCart;
