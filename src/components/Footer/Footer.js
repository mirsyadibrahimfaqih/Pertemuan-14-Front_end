import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bgGradient="linear(to right, #f5ce62, #e43603, #fa7199, #e85a19)"
      color="white"
      py={4}
      textAlign="center"
    >
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        Movie App
      </Text>
      <Text>Created By M Irsyad Ibrahim Faqih</Text>
    </Box>
  );
};

export default Footer;
