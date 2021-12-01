import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";

const Citation = () => {
  return (
      <>
      <Flex ps={"5em"} pt={"5em"}>
        <Box ms={"5em"}>
          <Heading fontWeight="bold" size="4xl">Citations</Heading>
          <Text fontSize="lg" mt={"1em"} ms={1}>All art/works used, cited here</Text>
        </Box>
      </Flex>
      <Flex ml={"10em"} mt={"4em"}>
        <Box>
          <Heading>Film</Heading>
          <Box ms={5}>
            <Text mt={10}>
              The Hughes Brothers, Gary Whitta, <em>The Book of Eli</em>, Warner Bros. Pictures
            </Text>
            <Text mt={5}>
              Ingmar Bergman, Allan Ekelund, <em>The Seventh Seal</em>, AB Svensk Filmindustri
            </Text>
            <Text mt={5}>
              Robert Wise, Julian Blaustein, <em>The Day the Earth Stood Still</em>, 20th Century Fox
            </Text>
            <Text mt={5}>
              Francis Coppola, John Milius, <em>Apocalypse Now</em>, United Artists
            </Text>
            <Text mt={5}>
              Roland Emmerich, Dean Devlin, <em>Independence Day</em>, 20th Century Fox
            </Text>
            <Text mt={5}>
              Chris Eyre, Sherman Alexie, <em>Smoke Signals</em>, Miramax
            </Text>
            <Text mt={5}>
              Ridley Scott, Michael Deeley, <em>Blade Runner</em>, Warner Bros.
            </Text>
            <Text mt={5}>
              Franklin J. Schaffner, Arthur P. Jacobs, <em>Planet of the Apes</em>, 20th Century Fox
            </Text>
            <Text mt={5}>
              Danny Boyle, Andrew Macdonald, <em>28 Days Later</em>, Fox Searchlight Pictures
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex ml={"10em"} mt={"5em"}>
        <Box>
          <Heading>Contemporary</Heading>
          <Box ms={5}>
            <Text mt={10}>
              David Alfaro Siqueiros, <em>Collective Suicide</em>, 1936, Museum of Modern Arts
            </Text>
            <Text mt={5}>
              John Goto, <em>Deluge</em>, 2000, Yale Center for British Art
            </Text>
            <Text mt={5}>
              Max Ernst, <em>Europe After Rain II</em>, 1941, Wadsworth Atheneum
            </Text>
            <Text mt={5}>
              Pablo Picasso, <em>Guernica</em>, 1937, Museo Nacional Centro de Arte Reina Sofía
            </Text>
            <Text mt={5}>
              Salvador Dalí, <em>Soft Construction with Boiled Beans</em>, 1936, Philadelphia Museum of Art
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex ml={"10em"} mt={"5em"}>
        <Box>
          <Heading>19th Century</Heading>
          <Box ms={5}>
            <Text mt={10}>
              Gustave Dore, <em>The Deluge</em>, 1866, Unknown
            </Text>
            <Text mt={5}>
              John Martin, <em>The Deluge</em>, 1834, Yale Center for British Art
            </Text>
            <Text mt={5}>
              J. M. W. Turner, <em>The Deluge</em>, 1805, Tate
            </Text>
            <Text mt={5}>
              Thomas Cole, <em>Destruction, from The Course of Empire</em>, 1836, Luce Center
            </Text>
            <Text mt={5}>
              Francisco Goya, <em>Saturn Devouring His Son</em>, 1823, Museo Nacional del Prado
            </Text>
            <Text mt={5}>
              Alfred William Hunt, <em>Tynemouth Pier - Lighting the Lamps at Sundown</em>, 1868, Yale Center for British Art
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex ml={"10em"} mt={"5em"} mb={"5em"}>
        <Box>
          <Heading>16th Century</Heading>
          <Box ms={5}>
            <Text mt={10}>
              Albrecht Dürer, <em>Beast With Seven Heads</em>, 1511, The Metropolitan Museum of Art
            </Text>
            <Text mt={5}>
              Albrecht Dürer, <em>Four Hoursemen of the Apocalypse</em>, 1502, The Metropolitan Museum of Art
            </Text>
            <Text mt={5}>
              Hieronymus Bosch, <em>The Garden of Earthly Delights</em>, 1515, Museo Nacional del Prado
            </Text>
            <Text mt={5}>
              Michelangelo, <em>Last Judgement</em>, 1541, Sistine Chapel
            </Text>
          </Box>
        </Box>
      </Flex>

      </>
  );
};

export default Citation;
