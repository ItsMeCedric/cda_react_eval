import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import { BrowserRouter, Route, Routes } from "react-router";
import { MessageProvider } from "./context/MessageContext/MessageProvider";

// import des pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MovieAdd from "./pages/MovieAdd/MovieAdd";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MovieEdit from "./pages/MovieEdit/MovieEdit";
import Movies from "./pages/Movies/Movies";
import Layout from "./components/Layout/Layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MessageProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          <Route
            path="/add-movie"
            element={
              <Layout>
                <MovieAdd />
              </Layout>
            }
          />
          <Route
            path="/movie-details"
            element={
              <Layout>
                <MovieDetails />
              </Layout>
            }
          />
          <Route
            path="/edit-movie"
            element={
              <Layout>
                <MovieEdit />
              </Layout>
            }
          />
          <Route
            path="/movies"
            element={
              <Layout>
                <Movies />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </MessageProvider>
  </StrictMode>
);
