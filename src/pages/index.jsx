import { ChakraProvider, Text, Center } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react';
import '../styles/global.scss';
import theme from '../theme/theme';

const IndexPage = () => (
  <ChakraProvider theme={theme} resetCSS>
    <Suspense fallback={null}>
      <Center h="100vh" bg="gray.300">
        <Text color="green.600" fontWeight={700} fontSize={40}>
          Gatsby x Chakra UI Boiler Plate
        </Text>
      </Center>
    </Suspense>
  </ChakraProvider>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>
