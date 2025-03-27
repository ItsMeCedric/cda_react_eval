import { MovieService } from "../../services/movieService";
import { createContext } from "react";

export const MovieContext = createContext(new MovieService());
