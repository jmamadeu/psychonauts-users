import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Input,
  InputGroup,
  InputRightAddon,
  Link,
  Text
} from "@chakra-ui/react";

function App() {
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
          <Box as="section">
            <Box as="article" display="flex" alignItems="center">
              <Avatar
                size="2xl"
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />
              <Box as="div" marginLeft={10}>
                <Text>Male</Text>
                <Text>Mateus Aalexandre</Text>

                <Button marginTop={10}>Details</Button>
              </Box>
            </Box>
          </Box>
          <Box as="section">
            <Box as="article" display="flex" alignItems="center">
              <Avatar
                size="2xl"
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />
              <Box as="div" marginLeft={10}>
                <Text>Male</Text>
                <Text>Mateus Aalexandre</Text>

                <Button marginTop={10}>Details</Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" marginTop={10}>
          <Button>Load more</Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
