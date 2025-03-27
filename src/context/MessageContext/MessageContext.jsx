import { createContext } from "react";

// initialisation de la fonction message vide
export const MessageContext = createContext({
  message: {
    type: "", // success (vert) ou error (rouge)
    content: "", // le message d'erreur
  },
  setMessage: () => {}, // fonction pour mettre à jour message
});
