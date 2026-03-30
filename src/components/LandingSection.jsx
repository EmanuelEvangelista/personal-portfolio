import { Avatar, Heading, Text, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import perfilImg from "../assets/perfil.png";

const greeting = "Hi, I'm Emanuel!";
const bio1 = "Fullstack Developer · Next.js · TypeScript · React";
const bio2 =
  "I build production-grade web apps with real business logic — from contract management platforms to real estate marketplaces.";

const LandingSection = () => (
  <FullScreenSection
    marginTop="30px"
    justifyContent="center"
    alignItems="center"
    isDarkBackground={false}
    backgroundColor="#F8FAFC"
    color="#1E293B"
  >
    <VStack spacing={6} textAlign="center">
      {/* Sección del Avatar y Saludo */}
      <VStack spacing={4}>
        <Avatar
          size="2xl"
          name="Emanuel"
          src={perfilImg}
          border="4px solid white"
          boxShadow="xl"
        />
        <Text fontSize="lg" fontWeight="medium" color="indigo.600">
          {greeting}
        </Text>
      </VStack>

      {/* Título Principal */}
      <VStack spacing={2} maxWidth="800px">
        <Heading as="h1" size="2xl" fontWeight="black" letterSpacing="tight">
          {bio1}
        </Heading>

        {/* Subtítulo / Bio Secundaria */}
        <Text fontSize="xl" color="slate.500" maxW="600px" lineHeight="tall">
          {bio2}
        </Text>
      </VStack>

      {/* Decoración opcional: Una línea sutil */}
      <Box w="40px" h="4px" bg="indigo.500" borderRadius="full" mt={4} />
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
