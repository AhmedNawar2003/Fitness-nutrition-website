import { Helmet, HelmetProvider } from "react-helmet-async";

export default function About() {
  return (
    <div>
        <HelmetProvider>
            <Helmet>
                <title>About</title>
            </Helmet>
        </HelmetProvider>
      <h1>About Page</h1>
    </div>
  )
}
