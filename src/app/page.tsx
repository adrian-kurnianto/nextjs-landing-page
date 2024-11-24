import Hero from "@/components/HeroSection/Hero";
import { ImageType, ProductType } from "@/productType";
import Product from "@/components/ProductSection/Product";
import Footer from "@/components/Footer/Footer";
export default async function Home() {
  const imageData = await fetch("https://www.giovankov.com/api/image.json");
  const productData = await fetch("https://www.giovankov.com/api/product.json");

  const images = await imageData.json();
  const product = await productData.json();

  const modifiedProduct = product.data.map((el: ProductType, index: number) => {
    let imgStr;
    const prdId = index + 1;

    images.data.forEach((el: ImageType) => {
      const checked = el.id.some((idx) => idx === prdId.toString());
      if (checked) {
        imgStr = el.image;
      }
    });

    return {
      id: el.id,
      name: el.name,
      img: imgStr,
    };
  });

  return (
    <div className="overflow-hidden">
      <div id="hero-section">
        <Hero></Hero>
      </div>
      <div id="product-section">
        <Product products={modifiedProduct}></Product>
      </div>
      <div id="contact-section">
        <Footer></Footer>
      </div>
    </div>
  );
}
