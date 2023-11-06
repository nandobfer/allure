import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Home } from "./screens/Home"
import { Products } from "./screens/Products"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route index element={<Home />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="*" element={<Home />} />
        </ReactRoutes>
    )
}
