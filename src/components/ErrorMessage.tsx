import { ErrorDetails } from "@/types/response";
import { Box } from "@chakra-ui/react";

export function ErrorMessage(props: ErrorDetails) {
  const { errorMessage } = props;
  return (
    <Box
      bgColor="red.200"
      padding="2"
      borderWidth="thin"
      borderColor="red.400"
      borderRadius="sm"
      color="red.700"
    >
      {errorMessage}
    </Box>
  );
}
