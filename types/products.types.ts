interface Product{
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  description: string;
  price: number;
}
interface APIResponse{
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}


interface ActionStateType{
    message: string;
    error: boolean
}

export type {
    Product,
    APIResponse,
    ActionStateType
}
