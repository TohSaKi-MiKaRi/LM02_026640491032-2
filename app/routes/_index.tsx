import type { MetaFunction } from "@remix-run/node";
import Menu from "./template/menu";
import { MyHomePage } from "./HomePage";
export const meta: MetaFunction = () => {
  return [
    
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <Menu />
      <MyHomePage />
      

    </div>
  );
}
