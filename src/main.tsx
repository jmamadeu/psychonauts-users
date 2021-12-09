import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";
import { FavoritesUserProvider } from "./contexts/favorites-users";
import { Router } from "./routes";
import { queryClient } from "./services/api";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <FavoritesUserProvider>
          <Router />
        </FavoritesUserProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
