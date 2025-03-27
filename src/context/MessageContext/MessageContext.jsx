import { createContext } from "react";

export const MessageContext = createContext({
  message: {
    type: "",
    content: "",
  },
  setMessage: () => {},
});
