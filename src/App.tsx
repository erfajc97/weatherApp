import "./App.css";
import WeatherApp from "./weatherCheckApp/pages/WeatherApp";
import WeatherAppLayout from "./weatherCheckApp/layout/WeatherAppLayout";
import { ErrorProvider } from "./weatherCheckApp/context/ErrorContext";

function App() {
  return (
    <ErrorProvider>
      <WeatherAppLayout>
        <WeatherApp />
      </WeatherAppLayout>
    </ErrorProvider>
  );
}

export default App;
