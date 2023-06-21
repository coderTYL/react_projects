import { Outlet } from "react-router-dom";

const User: React.FC = ()=> {
    return(
        <>
        <div>
            用户页面
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
};
export default User;