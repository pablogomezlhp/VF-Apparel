interface Image {
  src: string;
}
interface Variant {
  option1: string;
  option2: string;
  price: string;
}
export default interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  variant: string;
  body_html: string;
  created_at: Date;
  handle: string;
  images: Image[];
  product_type: string;
  published_at: Date;
  tags: string[];
  updated_at: Date;
  variants: Variant[];
  vendor: string;
  quantity: number;
}

export interface CartState {
  items: Product[];
  itemCount: number;
  totalCost: number;
}

export interface ProductsState {
  data: Product[];
}

export default interface RootState {
  cart: CartState;
  products: ProductsState;
}
