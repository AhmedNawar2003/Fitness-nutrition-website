import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Profile() {
  return (
    <div>
        <HelmetProvider>
            <Helmet>
                <title>Profile</title>
            </Helmet>
        </HelmetProvider>
        <h1>Profile Page</h1>
    </div>
  )
}
