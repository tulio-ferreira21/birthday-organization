import { Route, Routes } from "react-router-dom"
import Decorations from "../Pages/Decorations/page"
import Home from "../Home/home";
import Foods from "../Pages/Food/page";
import Disposable from "../Pages/Disposable/page";
import Invites from "../Pages/Invites/page";
const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="list/decoracao" element={<Decorations />}></Route>
        <Route path="list/descartaveis" element={<Disposable />}></Route>
        <Route path="list/comida" element={<Foods />}></Route>
        <Route path="list/convidados" element={<Invites />}></Route>
        <Route path="/custos"></Route>
    </Routes>
)
export default AppRouter;