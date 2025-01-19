import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Register() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Register</title>
        </Helmet>
      </HelmetProvider>
        <h1>Register Page</h1>
    </div>
  )
}
