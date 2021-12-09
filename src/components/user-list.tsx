import {
  Badge,
  Box,
  Button,
  Heading,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import { useFavoriteUserIds } from "../contexts/favorites-users";
import { UserProperties } from "../models/user";
import { UserCard } from "./user-card";

type UserListProps = {
  users: UserProperties[];
};

export const UserList = ({ users }: UserListProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState<UserProperties>();
  const { favoriteIds, favoriteClickHandler } = useFavoriteUserIds();

  const usersParsed = users.map((user) => ({
    ...user,
    isFavorite: !!favoriteIds.find((id) => id === user._id)
  }));

  const cardDetailsHandler = (user: UserProperties) => {
    setSelectedUser(user);
    onOpen();
  };

  return (
    <>
      <Box as="section">
        {usersParsed?.map((user, index) => (
          <Box key={user._id} marginTop={index > 0 ? 10 : 0}>
            <UserCard
              onFavoriteClick={favoriteClickHandler}
              onDetailsClick={cardDetailsHandler}
              user={user}
            />
          </Box>
        ))}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textTransform="uppercase"
            display="flex"
            alignItems="center"
          >
            <Text>{selectedUser?.name}</Text>
            <Badge marginLeft={5} colorScheme="purple">
              {selectedUser?.gender}
            </Badge>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Heading as="h4" size="md">
                Powers
              </Heading>
              <UnorderedList marginTop={5}>
                {selectedUser?.psiPowers.map((power, index) => (
                  <ListItem key={power._id} marginTop={index > 0 ? 4 : 0}>
                    {power.name}
                    <Box display="flex" alignItems="center">
                      <Image
                        boxSize="50px"
                        objectFit="cover"
                        src={power.img}
                        alt="Dan Abramov"
                      />
                      <Text marginLeft={4}>{power.description}</Text>
                    </Box>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
