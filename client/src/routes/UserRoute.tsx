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
        </div>
    </>
  )
}
