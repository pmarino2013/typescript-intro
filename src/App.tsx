import { useState } from "react";
import FormShop from "./components/FormShop";
import type { Product } from "./interfaces/products"; //importo la interfaz para tipeo
import CardShop from "./components/CardShop";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]); //uso la interfaz para definir el estado como array

  const pendientes: number = products.filter((item) => !item.check).length;

  const agregarProducto = (producto: Product) => {
    setProducts([...products, producto]);
  };

  const actualizarProducto = (id: number) => {
    setProducts((p: Product[]) =>
      p.map((product: Product) =>
        product.id === id ? { ...product, check: !product.check } : product,
      ),
    );
  };

  const borrarProducto = (id: number) => {
    setProducts((p: Product[]) => p.filter((item) => item.id != id));
  };

  return (
    <main className="bg-gray-100">
      <section className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl">Lista de shopping</h1>
        <div className="w-80 mb-1">
          <FormShop agregarProducto={agregarProducto} />
        </div>
        <div>
          <span>{pendientes} Pendientes</span>
        </div>
        {products.map((item) => (
          <CardShop
            product={item}
            key={item.id}
            actualizarProducto={actualizarProducto}
            borrarProducto={borrarProducto}
          />
        ))}
      </section>
    </main>
  );
};

export default App;
