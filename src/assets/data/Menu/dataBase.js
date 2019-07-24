import Breakfast1 from '../../../assets/images/Menu/jajecznica.jpg';
import Breakfast2 from '../../../assets/images/Menu/omlet_1.jpg';
import Breakfast3 from '../../../assets/images/Menu/omlet_2.jpg';
import Breakfast4 from '../../../assets/images/Menu/tosty.jpg';
import Breakfast5 from '../../../assets/images/Menu/ham_sandwich.jpg';
import Breakfast6 from '../../../assets/images/Menu/chicken_sandwich.jpg';
import Breakfast8 from '../../../assets/images/Menu/cheese_sandwich.jpg';

import Res1 from '../../../assets/images/Restaurant/Restaurant2.webp';
import Res2 from '../../../assets/images/Restaurant/Restaurant3.webp';
import Res3 from '../../../assets/images/Restaurant/Restaurant4.webp';
import Res4 from '../../../assets/images/Restaurant/Restaurant5.webp';
import Res5 from '../../../assets/images/Restaurant/Restaurant6.webp';
import Res6 from '../../../assets/images/Restaurant/Restaurant7.webp';
import Res7 from '../../../assets/images/Restaurant/Restaurant8.jpg';

const dataBase =
{
  "Breakfast": [
    {
      "Mains": [
        {
          "id": 7,
          "imgUrl": '' + Breakfast1,
          "likes": "5",
          "price": 11,
          "product_name": "Fried eggs",
          "description": "Fried eggs with butter",
        },
        {
          "id": 8,
          "imgUrl": '' + Breakfast2,
          "likes": "7",
          "price": 12,
          "product_name": "Omelette",
          "description": "Omelette with onion",
          "special": true,
        },
        {
          "id": 9,
          "imgUrl": '' + Breakfast3,
          "likes": "2",
          "price": 13,
          "product_name": "Omelette with ham",
          "description": "Omelette with onion and ham",
        },
        {
          "id": 17,
          "imgUrl": '' + Breakfast4,
          "likes": "2",
          "price": 9,
          "product_name": "Toast",
          "description": "Toast with cheese, mushrooms and basil leaves",
        },
      ]
    },
    {
      "Sandwiches": [
        {
          "id": 1,
          "imgUrl": '' + Breakfast5,
          "price": 6,
          "product_name": "Sandwich with ham",
          "description": "Handmade bread with salad, ham and butter",
        },
        {
          "id": 2,
          "imgUrl": '' + Breakfast6,
          "likes": "1",
          "price": 7,
          "product_name": "Sandwich with chicken",
          "description": "Handmade bread with chicken, salad and tomato",
        },
        {
          "id": 3,
          "imgUrl": '' + Breakfast8,
          "likes": "2",
          "price": 4,
          "product_name": "Sandwich with cheese",
          "description": "Handmade bread with cheese and salad",
          "special": true,
        },
      ]
    },
  ],
  "Lunch": [
    {
      "Starters": [
        {
          "id": 10,
          "imgUrl": '' + Res1,
          "price": 10,
          "product_name": "Asparagus",
          "description": "Our famous asparagus, with olive oil & balsamic vinegar",
        },
        {
          "id": 11,
          "imgUrl": '' + Res2,
          "likes": "1",
          "price": 9,
          "product_name": "Organic Spinach Salad",
          "description": "Organic spinach salad, sprinkled with parmesan & pine nuts",
        },
        {
          "id": 12,
          "imgUrl": '' + Res4,
          "likes": "2",
          "price": 18,
          "product_name": "Shrimps",
          "description": "Shrimps with olive oil and salad",
          "special": true,
        },
      ]
    },
    {
      "Mains": [
        {
          "id": 13,
          "imgUrl": '' + Res3,
          "likes": "5",
          "price": 23,
          "product_name": "Prawn shrimps",
          "description": "Shrimps with fresh garlic, herbs & cheese, topped with basil",
        },
        {
          "id": 14,
          "imgUrl": '' + Res5,
          "likes": "7",
          "price": 16,
          "product_name": "Pumpkin ravioli",
          "description": "Handmade pumpkin ravioli, tossed in sage brown butter sauce with parmesan",
          "special": true,
        },
        {
          "id": 15,
          "imgUrl": '' + Res7,
          "likes": "2",
          "price": 13,
          "product_name": "Gnocchi",
          "description": "Potato filled gnocchi with mozzarella, fresh tomatoes & basil leaves",
        },
      ]
    },
    {
      "Soups": [
        {
          "id": 16,
          "imgUrl": '' + Res6,
          "likes": "8",
          "price": 10,
          "product_name": "Chicken soup with mushrooms",
          "description": "Chicken soup with mushrooms, fresh garlic, herbs & cheese, topped with basil",
        },
      ]
    },
  ]
}
export default dataBase;