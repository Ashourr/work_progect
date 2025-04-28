import Bestseller from "@/components/bestseller/Bestseller";
import Categories from "@/components/categories/Categories";
import Default_product from "@/components/default_product/Default_product";
import Headerslider from "@/components/header-slider/Headerslider";
import Imghome from "@/components/imghome/Imghome";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  // async
  // await new Promise((resolve) => setTimeout(resolve, 100000)); // Simulate a delay of 2 seconds
  return (
    <div style={{ overflowX: "hidden" }}>
      <Headerslider />
      <Categories />
      <Bestseller />
      <Imghome />
      <Default_product />
    </div>
  );
}
