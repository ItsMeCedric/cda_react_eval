import { useState } from "react";
import { MessageContext } from "./MessageContext";

// permet d'afficher les message de confirmation ou d'échec
// type : success ou error
// contenu : codé directement dans la fonction (pas réussi à passer par le json)

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState({ type: "", content: "" });

  const showMessage = (type, content) => {
    setMessage({ type, content });
    setTimeout(() => {setMessage({ type: "", content: "" });}, 2000);
  };

  return (
    <MessageContext.Provider value={{ message, showMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
