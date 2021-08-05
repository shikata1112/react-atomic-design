import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "しゅう",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@gmail.com",
  phone: "090-9090-9809",
  company: {
    name: "aaa株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
