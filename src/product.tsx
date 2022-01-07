type Product = {
  id: string;
  name: string;
  description: string;
  images: string[];
};
type Metadata = {
  quantity: string;
};
export type Price = {
  id: string;
  currency: string;
  unit_amount: number;
  metadata: Metadata;
  product: Product;
};
