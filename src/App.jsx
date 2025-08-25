import { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import Spinner from "./components/Spinner";
import AppRouter from "./router"; 

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3550);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Spinner />;

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}
