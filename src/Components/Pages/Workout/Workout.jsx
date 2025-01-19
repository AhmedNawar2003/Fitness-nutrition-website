import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Workout() {
  return (
    <div>
        <HelmetProvider>
            <Helmet>
                <title>Workout</title>
            </Helmet>
        </HelmetProvider>
        <h1>Workout Page</h1>
      
    </div>
  )
}
