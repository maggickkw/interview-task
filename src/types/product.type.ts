export const enum CategoryImage {
  All = 'All',
  SEA_FOOD = 'Sea food',
  FAST_FOOD = 'Fast food',
  DRINKS = 'Drinks',
  DESSERTS = 'Desserts',
  VEGETARIAN = "Vegetarian",
}

// export type categoryImageT = keyof typeof CategoryImage;

export type categoryT = {
  id: number;
  name: string;
  icon: string;
};

export type popularT = {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
};

export type productT = {
  id: number;
  name: string;
  category_id: number;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  ingredients: string[];
  extraIngredients: ExtraIngredientT[];
};

export type ExtraIngredientT = {
  name: string;
  price: number;
};

export type cartT = {
  id: string | number;
  name: string;
  price: number;
  image: string;
  qty: number;
};
