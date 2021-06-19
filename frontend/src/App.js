import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { Container } from "@material-ui/core";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Route path="/" exact component={SignIn} />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
