import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Text } from "@chakra-ui/react";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/EmanuelEvangelista",
    label: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com/in/your-profile",
    label: "LinkedIn",
  },
  { icon: faEnvelope, url: "mailto:hello@example.com", label: "Email" },
];

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const element = document.getElementById(`${anchor}-section`);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const headerElement = headerRef.current;
    if (!headerElement) return;

    if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
      headerElement.style.transform = "translateY(-80px)";
    } else if (currentScrollY < prevScrollY.current) {
      headerElement.style.transform = "translateY(0)";
    }
    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transitionProperty="transform"
      transitionDuration="0.3s"
      transitionTimingFunction="ease-in-out"
      bg="rgba(15, 23, 42, 0.92)"
      backdropFilter="blur(12px)"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
      zIndex={1000}
    >
      <Box maxW="1280px" mx="auto" px={{ base: 6, md: 12 }} py={4}>
        <HStack justifyContent="space-between" alignItems="center">
          {/* Logo / Name */}
          <Text
            fontSize="sm"
            fontWeight="black"
            color="white"
            letterSpacing="-0.02em"
            fontFamily="'Georgia', serif"
          >
            EE
            <Box as="span" color="#6366F1">
              .
            </Box>
          </Text>

          {/* Nav links */}
          <HStack spacing={10}>
            <Box
              as="a"
              href="#projects-section"
              onClick={handleClick("projects")}
              fontSize="sm"
              fontWeight="semibold"
              color="#94A3B8"
              _hover={{ color: "white" }}
              transition="color 0.2s"
            >
              Projects
            </Box>
            <Box
              as="a"
              href="#contactme-section"
              onClick={handleClick("contactme")}
              fontSize="sm"
              fontWeight="semibold"
              color="#94A3B8"
              _hover={{ color: "white" }}
              transition="color 0.2s"
            >
              Contact
            </Box>
          </HStack>

          {/* Socials */}
          <HStack spacing={5}>
            {socials.map((social) => (
              <Box
                key={social.url}
                as="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                color="#64748B"
                _hover={{ color: "#6366F1" }}
                transition="color 0.2s"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </Box>
            ))}
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
