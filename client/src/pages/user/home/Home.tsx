import BestSellerProduct from "./items/BestSellerProduct";
import HomeCategory from "./items/HomeCategory";

export default function Home() {
  return <>
    <div>
        {/* category */}
        <div className="p-8">
            <HomeCategory/>
        </div>
        {/* best seller product */}
        <div className="p-8">
          <BestSellerProduct/>
        </div>
    </div>
  </>;
}
