import { NotFound } from "../components/NotFound.tsx";
import { define } from "../utils.ts";

export default define.page(function NotFoundRoute() {
  return <NotFound />;
});
