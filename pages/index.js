import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Divider } from "@chakra-ui/react";

const Home = () => (
  <Center py={6}>
    <Box
      maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      <Avatar
        size={"xl"}
        src={"https://i.ibb.co/bsztFmD/adhikakids.png"}
        alt={"Avatar Alt"}
        mb={4}
        pos={"relative"}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: "green.300",
          border: "2px solid white",
          rounded: "full",
          pos: "absolute",
          bottom: 0,
          right: 3,
        }}
      />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        Adhika Candra
      </Heading>
      <Text fontWeight={600} color={"gray.500"} mb={4}>
        @Kara
      </Text>
      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
      >
        Hi, I am 21 years old, I just graduated from school 2 years ago☻.
      </Text>

      <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue("gray.50", "gray.800")}
          fontWeight={"400"}
        >
          #art
        </Badge>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue("gray.50", "gray.800")}
          fontWeight={"400"}
        >
          #Gaming
        </Badge>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue("gray.50", "gray.800")}
          fontWeight={"400"}
        >
          #music
        </Badge>
      </Stack>

      <Divider my={4} />

      <Button
        w={"full"}
        maxW={"md"}
        colorScheme={"messenger"}
        leftIcon={<IoLogoWhatsapp />}
        marginTop="30px"
      >
        <Center>
          <Text>Send to WhatsApp</Text>
        </Center>
      </Button>

      <Button
        w={"full"}
        maxW={"md"}
        colorScheme={"messenger"}
        leftIcon={<FaFacebook />}
        marginTop="10px"
      >
        <Center>
          <Text>Send to Facebook</Text>
        </Center>
      </Button>

      <Button
        w={"full"}
        maxW={"md"}
        colorScheme={"messenger"}
        leftIcon={<AiFillInstagram />}
        marginTop="10px"
      >
        <Center>
          <Text>Send to Instagram</Text>
        </Center>
      </Button>
    </Box>
  </Center>
);

export default Home;

export { getServerSideProps } from "../components/chakra";
