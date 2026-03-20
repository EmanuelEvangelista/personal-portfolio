import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { onOpen } = useAlertContext();
  const [isLoading, setIsLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      try {
        const response = await fetch("https://formspree.io/f/xojkrbdw", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.firstName,
            email: values.email,
            message: values.comment,
            type: values.type,
          }),
        });

        if (response.ok) {
          onOpen(
            "success",
            `Thank you ${values.firstName}, your message was sent successfully!`,
          );
          resetForm();
        } else {
          onOpen("error", "Something went wrong, please try again later.");
        }
      } catch (error) {
        console.log(error);
        onOpen("error", "Connection error. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      comment: Yup.string()
        .min(20, "Message must be at least 20 characters")
        .required("A message is required"),
      type: Yup.string().required("Please select a query type."),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#F8FAFC"
      py={16}
      spacing={8}
    >
      <Box maxW="1024px" w="full" mx="auto" py={16} px={{ base: 6, md: 8 }}>
        {/* Header */}
        <Box mb={12}>
          <HStack spacing={2} mb={4}>
            <Box w={8} h="2px" bg="#6366F1" borderRadius="full" />
            <Text
              fontSize="xs"
              fontWeight="black"
              color="#6366F1"
              letterSpacing="0.2em"
              textTransform="uppercase"
            >
              Get in touch
            </Text>
          </HStack>
          <Heading
            as="h2"
            id="contactme-section"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="black"
            color="#0F172A"
            letterSpacing="-0.03em"
            lineHeight={1.1}
            fontFamily="'Georgia', serif"
          >
            Let's work
            <Box as="span" color="#6366F1">
              {" "}
              together.
            </Box>
          </Heading>
          <Text
            mt={4}
            color="#64748B"
            fontSize="md"
            maxW="480px"
            lineHeight={1.7}
          >
            Have a project in mind or want to talk? Send me a message and I'll
            get back to you.
          </Text>
        </Box>

        {/* Form */}
        <Box
          p={{ base: 6, md: 10 }}
          rounded="2xl"
          w="100%"
          maxW="640px"
          bg="white"
          border="1.5px solid"
          borderColor="#E2E8F0"
          boxShadow="0 4px 24px -4px rgba(0,0,0,0.06)"
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={6}>
              <FormControl
                isInvalid={
                  !!formik.errors.firstName && formik.touched.firstName
                }
              >
                <FormLabel
                  htmlFor="firstName"
                  fontSize="xs"
                  fontWeight="black"
                  color="#475569"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                >
                  Name
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John Doe"
                  bg="#F8FAFC"
                  textColor="black"
                  border="1.5px solid"
                  borderColor="#E2E8F0"
                  borderRadius="xl"
                  _hover={{ borderColor: "#CBD5E1" }}
                  _focus={{
                    borderColor: "#6366F1",
                    boxShadow: "0 0 0 3px rgba(99,102,241,0.1)",
                    bg: "white",
                  }}
                  _placeholder={{ color: "#CBD5E1" }}
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage fontSize="xs">
                  {formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                <FormLabel
                  htmlFor="email"
                  fontSize="xs"
                  fontWeight="black"
                  color="#475569"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                >
                  Email
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  textColor="black"
                  placeholder="john@example.com"
                  bg="#F8FAFC"
                  border="1.5px solid"
                  borderColor="#E2E8F0"
                  borderRadius="xl"
                  _hover={{ borderColor: "#CBD5E1" }}
                  _focus={{
                    borderColor: "#6366F1",
                    boxShadow: "0 0 0 3px rgba(99,102,241,0.1)",
                    bg: "white",
                  }}
                  _placeholder={{ color: "#CBD5E1" }}
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage fontSize="xs">
                  {formik.errors.email}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.type && formik.touched.type}
              >
                <FormLabel
                  htmlFor="type"
                  fontSize="xs"
                  fontWeight="black"
                  color="#475569"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                >
                  Type of enquiry
                </FormLabel>
                <Select
                  id="type"
                  name="type"
                  textColor="black"
                  bg="#F8FAFC"
                  border="1.5px solid"
                  borderColor="#E2E8F0"
                  borderRadius="xl"
                  color={formik.values.type ? "#0F172A" : "#CBD5E1"}
                  _hover={{ borderColor: "#CBD5E1" }}
                  _focus={{
                    borderColor: "#6366F1",
                    boxShadow: "0 0 0 3px rgba(99,102,241,0.1)",
                    bg: "white",
                  }}
                  {...formik.getFieldProps("type")}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage fontSize="xs">
                  {formik.errors.type}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
              >
                <FormLabel
                  htmlFor="comment"
                  fontSize="xs"
                  fontWeight="black"
                  color="#475569"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                >
                  Message
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  textColor="black"
                  height={160}
                  placeholder="Tell me about your project..."
                  bg="#F8FAFC"
                  border="1.5px solid"
                  borderColor="#E2E8F0"
                  borderRadius="xl"
                  resize="none"
                  _hover={{ borderColor: "#CBD5E1" }}
                  _focus={{
                    borderColor: "#6366F1",
                    boxShadow: "0 0 0 3px rgba(99,102,241,0.1)",
                    bg: "white",
                  }}
                  _placeholder={{ color: "#CBD5E1" }}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage fontSize="xs">
                  {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                w="full"
                size="lg"
                bg="#0F172A"
                color="white"
                fontWeight="black"
                fontSize="sm"
                letterSpacing="0.1em"
                textTransform="uppercase"
                borderRadius="xl"
                isLoading={isLoading}
                loadingText="Sending..."
                _hover={{ bg: "#6366F1" }}
                transition="background 0.2s"
              >
                Send message →
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default ContactMeSection;
