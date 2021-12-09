import {
  Alert,
  AlertIcon,
  Box,
  Container,
  Divider,
  Input,
  InputGroup,
  InputRightAddon,
  Spinner
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Header } from "../components/header";
import { UserList } from "../components/user-list";
import { useDebounce } from "../hooks/use-debounce";
import { useFetchUsers } from "../hooks/use-fetch-users";

export function Home() {
  const [searchUserName, setSearchUserName] = useState("");
  const debouncedSearchTerm: string = useDebounce<string>(searchUserName, 500);
  const { data, isLoading, error } = useFetchUsers({
    name: debouncedSearchTerm
  });

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUserName(event.target.value);
  };

  return (
    <>
      <Header />
      <Divider />

      <Container marginTop={5} maxW="container.sm">
        <Box>
          <InputGroup>
            <Input
              type="search"
              placeholder="type a name here"
              value={searchUserName}
              onChange={searchInputHandler}
            />
            <InputRightAddon>Search</InputRightAddon>
          </InputGroup>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          marginTop={10}
          justifyContent="space-between"
        >
          {!isLoading && !data?.length ? (
            <Alert status="error" variant="left-accent">
              <AlertIcon />
              No one user was found
            </Alert>
          ) : null}

          {isLoading && (
            <Box justifyContent="center" display="flex" width="100%">
              <Spinner size="xl" />
            </Box>
          )}

          {!isLoading && !error && data ? (
            <>
              <UserList users={data?.slice(0, Math.ceil(data.length / 2))} />
              <UserList users={data?.slice(Math.ceil(data.length / 2))} />
            </>
          ) : null}
        </Box>
      </Container>
    </>
  );
}
