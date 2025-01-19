import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Diet() {
  return (
    <div>
        <HelmetProvider>
            <Helmet>
                <title>Diet</title>
            </Helmet>
        </HelmetProvider>
      <h1>Diet Page</h1>
    </div>
  );
}
