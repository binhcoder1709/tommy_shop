import BottomHeader from "./items/BottomHeader";
import TopHeader from "./items/TopHeader";

export default function Header() {
  return (
    <>
      <header>
        {/* top header */}
        <TopHeader />
        {/* bottom header */}
        <BottomHeader/>
      </header>
    </>
  );
}
