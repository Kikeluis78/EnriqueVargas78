import { useState, useEffect } from "react";
import Layout from "./Layout/Layout.jsx";
import Spinner from "./components/Spinner.jsx";
import AppRouter from "./router/index.jsx";

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
