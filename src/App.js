import "./styles.css";
import { useEffect } from "react";
import instance from "./components/api/apiInstance";

export default function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await instance({
        // url of the api endpoint (can be changed)
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET"
      });
      const data = await res.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
