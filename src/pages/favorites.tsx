import { Box, Container, Divider } from "@chakra-ui/react";
import { Header } from "../components/header";
import { UserList } from "../components/user-list";
import { useFavoriteUserIds } from "../contexts/favorites-users";
import { useFetchUsers } from "../hooks/use-fetch-users";

export function Favorites() {
  const { data: users } = useFetchUsers({});
  const { favoriteIds } = useFavoriteUserIds();

  const usersParsed = users
    ?.map((user) => ({
      ...user,
      isFavorite: !!favoriteIds.find((id) => id === user._id)
    }))
    .filter((user) => user.isFavorite);

  return (
    <>
      <Header />
      <Divider />

      <Container maxW="container.sm">
        <Box
          display="flex"
          flexDirection="row"
          marginTop={10}
          justifyContent="space-between"
        >
          {usersParsed ? (
            <>
              <UserList
                users={usersParsed?.slice(0, Math.ceil(usersParsed.length / 2))}
              />
              <UserList
                users={usersParsed?.slice(Math.ceil(usersParsed.length / 2))}
              />
            </>
          ) : null}
        </Box>
      </Container>
    </>
  );
}
