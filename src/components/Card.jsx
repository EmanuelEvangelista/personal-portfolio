import { Box, Image, Heading, Text, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <Box
      as="article"
      bg="white"
      borderRadius="2xl"
      overflow="hidden"
      border="1.5px solid"
      borderColor="#E2E8F0"
      cursor="pointer"
      onClick={() => window.open(url, "_blank")}
      role="group"
      transition="all 0.3s ease"
      _hover={{
        borderColor: "#6366F1",
        transform: "translateY(-4px)",
        boxShadow: "0 20px 40px -12px rgba(99,102,241,0.15)",
      }}
    >
      {/* Image */}
      <Box overflow="hidden" h="220px" position="relative">
        <Image
          src={imageSrc}
          alt={title}
          w="full"
          h="full"
          objectFit="cover"
          transition="transform 0.4s ease"
          _groupHover={{ transform: "scale(1.04)" }}
        />
        {/* Overlay on hover */}
        <Box
          position="absolute"
          inset={0}
          bg="rgba(99,102,241,0.08)"
          opacity={0}
          _groupHover={{ opacity: 1 }}
          transition="opacity 0.3s"
        />
      </Box>

      {/* Content */}
      <Box p={6}>
        <HStack justify="space-between" align="flex-start" mb={3}>
          <Heading
            as="h3"
            fontSize="lg"
            fontWeight="black"
            color="#0F172A"
            letterSpacing="-0.02em"
            fontFamily="'Georgia', serif"
          >
            {title}
          </Heading>
          <Box
            color="#94A3B8"
            _groupHover={{ color: "#6366F1" }}
            transition="color 0.2s"
            flexShrink={0}
            mt={1}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
          </Box>
        </HStack>

        <Text fontSize="sm" color="#64748B" lineHeight={1.7} noOfLines={3}>
          {description}
        </Text>

        {/* Bottom line indicator */}
        <Box mt={5} h="2px" bg="#F1F5F9" borderRadius="full" overflow="hidden">
          <Box
            h="full"
            w="0%"
            bg="#6366F1"
            borderRadius="full"
            transition="width 0.4s ease"
            _groupHover={{ w: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
