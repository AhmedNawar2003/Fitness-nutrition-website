import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Contact() {
  return (
    <div>
        <HelmetProvider>
            <Helmet>
                <title>Contact</title>
            </Helmet>
        </HelmetProvider>
        <h1>Contact Page</h1>
      
    </div>
  )
}
