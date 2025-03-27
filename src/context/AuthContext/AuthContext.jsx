import { AuthService } from "../../services/authService";
import { createContext } from "react";

export const AuthContext = createContext(new AuthService());
