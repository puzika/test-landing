import { Routes, Route } from "react-router"
import { routes } from "./routes/root/root.route"
import Root from "./routes/root/root.route"
import Home from "./routes/home/home.route"
import Images from "./routes/images/images.route"
import Test from "./routes/test/test.route"
import Results from "./routes/results/results.route"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path={routes.images} element={<Images />} />
        <Route path={routes.test} element={<Test />} />
        <Route path={routes.results} element={<Results />} />
      </Route>
    </Routes>
  )
}