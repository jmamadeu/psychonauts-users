import {
  Box,
  Container,
  Divider,
  Input,
  InputGroup,
  InputRightAddon,
  Link,
  Spinner,
  Text
} from "@chakra-ui/react";
import { UserList } from "./components/user-list";
import { useFetchUsers } from "./hooks/useFetchUsers";

function App() {
  const { data, isLoading, error } = useFetchUsers();
  console.log(data);

  return (
    <>
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
          <Link textTransform="uppercase" color="gray.900">
            Home
          </Link>
          <Link textTransform="uppercase" color="gray.600" marginLeft={16}>
            Favorites
          </Link>
        </Box>
      </Box>
      <Divider />

      <Container marginTop={5} maxW="container.sm">
        <Box>
          <InputGroup>
            <Input type="search" placeholder="type a name here" />
            <InputRightAddon>Search</InputRightAddon>
          </InputGroup>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          marginTop={10}
          justifyContent="space-between"
        >
          {isLoading && (
            <Box justifyContent="center" display="flex" width="100%">
              <Spinner size="xl" />
            </Box>
          )}

          {!isLoading && !error && data ? (
            <>
              <UserList users={data?.slice(0, data.length / 2)} />
              <UserList users={data?.slice(data.length / 2)} />
            </>
          ) : null}
        </Box>
      </Container>
    </>
  );
}

export default App;
