import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";import { useLanguage } from "./hooks/useLanguage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Routes from "./Routes";
import "./styles/defaults.css";
import "./styles/rtl.css";
import "./styles/ltr.css";
import "./styles/home.css";
import "./styles/contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { PopupProvider } from "./hooks/usePopup";
import SignUp from "./components/Signup";
import store from "./store";
const colors = {
  primary: "#f39122",
  "primary-light": "#f3912255",
  "primary-dark": "#dd841f",
  secondary: "#8ec045",
  "secondary-light": "#8ec04555",
  "secondary-dark": "#668a30",
};

const App = () => {
  const { language } = useLanguage();
  const theme = createMuiTheme({
    direction: language.direction,
    palette: {
      primary: {
        main: colors.primary,
        light: colors["primary-light"],
        dark: colors["primary-dark"],
        contrastText: `#fff`,
      },
      secondary: {
        contrastText: `#fff`,
        main: colors.secondary,
        light: colors["secondary-light"],
        dark: colors["secondary-dark"],
      },
    },
    typography: {
      fontFamily: `"Poppins","Droid Arabic Kufi", sans-serif`,
      fontWeightBold: 700,
      fontWeightLight: 300,
      fontWeightMedium: 600,
      fontWeightRegular: 400,
      h1: {
        fontSize: `3rem`,
      },
      h2: {
        fontSize: `2.5rem`,
      },
      h3: {
        fontSize: `2rem`,
      },
      h4: {
        fontSize: `1.75rem`,
      },
      h5: {
        fontSize: `1.5rem`,
      },
      h6: {
        fontSize: `1.25rem`,
      },
    },
  });
  return (
    // <PopupProvider>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>

          {/* <Login /> */}
          {/* <SignUp /> */}
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
      </Provider>
    // </PopupProvider>
  );
};

export default App;
