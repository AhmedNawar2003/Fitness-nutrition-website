import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Home.css";
export default function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      <section className="Home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                <h1>Welcome to Our Website</h1>
                <h2>Are you Ready to begin your Journey ?</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
