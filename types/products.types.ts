interface Products{
  id: number;
  title: string;
  thumbnail: string;
  category: string;
}
interface APIResponse{
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}

export type {
    Products,
    APIResponse
}