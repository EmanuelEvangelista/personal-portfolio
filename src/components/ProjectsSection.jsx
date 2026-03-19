import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, SimpleGrid, HStack } from "@chakra-ui/react";
import Card from "./Card";

import contractAdvisorImg from "../assets/contract.png";
import nestrlyImg from "../assets/nestrly.jpg";
import leDomeImg from "../assets/le-dome.jpg";
import weatherAppImg from "../assets/weather.jpg";

const projects = [
  {
    title: "ContractAdvisor",
    description:
      "Full-stack contract management platform for agricultural studios. Features role-based access, internal messaging per contract, automated expiry email alerts, staff management, and a real-time dashboard.",
    imageSrc: contractAdvisorImg,
    url: "https://contractadvisor.vercel.app/",
  },
  {
    title: "Nestrly",
    description:
      "Real estate rental platform built with Next.js 14. Implements property search with filters, pagination, Cloudinary image uploads, and MongoDB-backed listings.",
    imageSrc: nestrlyImg,
    url: "https://nestrly.vercel.app/",
  },
  {
    title: "Le Dôme Restaurant",
    description:
      "Elegant landing page for a high-end French restaurant. Focuses on refined UI, smooth transitions, and a fully responsive mobile-first layout.",
    imageSrc: leDomeImg,
    url: "https://emanuelevangelista.github.io/le-dome-restaurant/",
  },
  {
    title: "WeatherWise",
    description:
      "Clean weather forecast app built with Vue.js. Fetches real-time data from a public API and displays current conditions and upcoming forecasts.",
    imageSrc: weatherAppImg,
    url: "https://emanuelevangelista.github.io/weather-app/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#0F172A"
      isDarkBackground={true}
      p={8}
      alignItems="flex-start"
    >
      <Box maxW="1024px" w="full" mx="auto" py={16} px={{ base: 4, md: 8 }}>
        {/* Header */}
        <Box mb={14}>
          <HStack spacing={2} mb={4}>
            <Box w={8} h="2px" bg="#6366F1" borderRadius="full" />
            <Text
              fontSize="xs"
              fontWeight="black"
              color="#6366F1"
              letterSpacing="0.2em"
              textTransform="uppercase"
            >
              Selected work
            </Text>
          </HStack>
          <Heading
            as="h2"
            id="projects-section"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="black"
            color="white"
            letterSpacing="-0.03em"
            lineHeight={1.1}
            fontFamily="'Georgia', serif"
          >
            Projects that
            <Box as="span" color="#6366F1">
              {" "}
              ship.
            </Box>
          </Heading>
          <Text
            mt={4}
            color="#64748B"
            fontSize="md"
            maxW="480px"
            lineHeight={1.7}
          >
            Real applications with real features — not tutorials or clones.
          </Text>
        </Box>

        {/* Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="100%">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              url={project.url}
            />
          ))}
        </SimpleGrid>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
