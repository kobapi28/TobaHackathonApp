export interface FoodListItem{
  image: string;
  link: string;
}


// Responce Interface
export interface ResponseFoodListItem{
  res: [
    {
      img: string;
      link: string;
    }
  ];
}
