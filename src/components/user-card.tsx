import { Avatar, Badge, Box, Button, IconButton, Text } from "@chakra-ui/react";
import { FiStar } from "react-icons/fi";
import { UserProperties } from "../models/user";

type UserCardProps = {
  user: UserProperties;
  onDetailsClick?: (user: UserProperties) => void;
  onFavoriteClick?: (id: UserProperties["_id"]) => void;
};

export const UserCard = ({
  user,
  onDetailsClick = () => {},
  onFavoriteClick = () => {}
}: UserCardProps) => (
  <Box as="article" display="flex" alignItems="center">
    <Avatar size="xl" name={user.name} src={user.img} />
    <Box as="div" marginLeft={10}>
      <Box display="flex">
        <Box>
          <Badge colorScheme="purple">{user.gender}</Badge>
          <Text>{user.name}</Text>
        </Box>
        <IconButton
          marginLeft={4}
          aria-label="icon"
          onClick={() => onFavoriteClick(user._id)}
        >
          <FiStar size={20} color={user.isFavorite ? "#975A16" : ""} />
        </IconButton>
      </Box>

      <Button marginTop={10} onClick={() => onDetailsClick(user)}>
        Details
      </Button>
    </Box>
  </Box>
);
