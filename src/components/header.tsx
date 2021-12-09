import { Box, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { v4 } from "uuid";
import { ROUTES } from "../routes";

export const Header = () => {
  const location = useLocation();

  const isCurrentRoute = (path: string) =>
    path.toLocaleLowerCase() === location.pathname.toLocaleLowerCase();

  return (
    <Box as="header" display="flex" justifyContent="space-between" p={8}>
      <Text
        textTransform="uppercase"
        color="gray.600"
        fontWeight="bold"
        fontSize="lg"
      >
        Psychonauts-users
      </Text>
      <Box as="div">
        {ROUTES.map((route, index) => (
          <RouterLink key={v4()} to={route.path}>
            <Link
              as="span"
              textTransform="uppercase"
              color="gray.600"
              marginLeft={index > 0 ? 16 : 0}
              textDecoration={isCurrentRoute(route.path) ? "underline" : ""}
            >
              {route.name}
            </Link>
          </RouterLink>
        ))}
      </Box>
    </Box>
  );
};
