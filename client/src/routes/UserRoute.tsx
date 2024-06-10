import { Outlet } from "react-router-dom";
import Header from "../layouts/user/header/Header";
import Navigator from "../layouts/user/navigator/Navigator";


export default function UserRoute() {
  return (
    <>
        <div>
            {/* header */}
            <div>
                <Header/>
            </div>
            {/* navigator */}
            <div>
                <Navigator/>
            </div>
            {/* outlet pages */}
            <div className="px-48">
              <Outlet/>
            </div>
        </div>
    </>
  )
}
