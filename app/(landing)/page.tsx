import { getAllCaregories } from "../services/category.service";
import { getAllProducst } from "../services/product.service";
import CategoriesSection from "./components/home/categories";
import Herosection from "./components/home/hero";
import ProductsSection from "./components/home/product";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCaregories(),
    getAllProducst(),
  ])

  return (
    <main>
      <Herosection/>
      <CategoriesSection categories={categories}/>
      <ProductsSection products={products}/>
    </main>
  );
}
