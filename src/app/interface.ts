export interface FoodListItem{
  image: string;
  link: string;
}

export interface Stock{
  image: string;
  link: string;
}

export interface User{
  twitterId: string;
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

export interface ResponseStock{
  twi_link: string;
  twi_img: string;
}

export interface ResponseUsers{
  twi_id: string[];
}


