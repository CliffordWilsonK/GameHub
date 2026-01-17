import NavBar from "@/components/NavBar";
import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading size="5xl" fontWeight={"bolder"}>
          Oops...
        </Heading>
        {isRouteErrorResponse(error) ? (
          <p>This Page does not Exist </p>
        ) : (
          <p>Unexpected Error occured</p>
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
