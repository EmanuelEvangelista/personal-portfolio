import { Avatar, Heading, Text, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import perfilImg from "../assets/perfil.png";
import { Button, HStack, Link } from "@chakra-ui/react";

const greeting = "Hi, I'm Emanuel";
const bio1 =
  "Full-Stack Developer · Next.js · TypeScript · React · AI-Powered SaaS";

const bio2 =
  "Creator of contractadvisor.com.ar — a production-ready AI-powered contract management platform for agribusiness. 10+ years in agribusiness finance and pharma logistics taught me how businesses actually work. Now I build scalable software that solves those operational problems.";
const LandingSection = () => (
  <FullScreenSection
    marginTop="30px"
    justifyContent="center"
    alignItems="center"
    isDarkBackground={false}
    backgroundColor="#F8FAFC"
    color="#1E293B"
  >
    <VStack spacing={6} textAlign="center" marginTop={30}>
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
        <HStack spacing={4} pt={4}>
          <Button
            as="a"
            href="https://contractadvisor.com.ar"
            target="_blank"
            colorScheme="purple"
            size="md"
          >
            View ContractAdvisor
          </Button>

          <Button
            as="a"
            href="https://github.com/EmanuelEvangelista"
            target="_blank"
            variant="outline"
            size="md"
          >
            GitHub
          </Button>
        </HStack>
      </VStack>

      {/* Decoración opcional: Una línea sutil */}
      <Box w="40px" h="4px" bg="indigo.500" borderRadius="full" mt={4} />
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
