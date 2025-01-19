import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Login() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Login</title>
        </Helmet>
      </HelmetProvider>
        <h1>Login Page</h1>
    </div>
  )
}
