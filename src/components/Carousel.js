import { useState } from "react";
import {
  Flex,
  useColorMode,
  useColorModeValue,
  Box,
  Text,
  Image,
  HStack,
  Center,
  AspectRatio,
} from "@chakra-ui/react";

export const Carousel = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 1,
      bg: "black",
      color: "blue.500",
    },
  };

  const slides = [
    {
      vid: "https://player.vimeo.com/video/310716029",
    },
    {
      vid: "https://player.vimeo.com/video/310661058",
    },
    {
      vid: "https://player.vimeo.com/video/310664847",
    },
    {
      vid: "https://player.vimeo.com/video/310716118",
    },
    {
      vid: "https://player.vimeo.com/video/262593120",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Center>
      <Flex
        w="100vw"
        bg="orange.100"
        p={10}
        alignItems="center"
        justifyContent="center"
      >
        {/* Actual Carousel component */}
        <Flex w="60vw" overflow="hidden" pos="relative">
          <Flex w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" flex="none">
                {/* <Text
                  color="black"
                  fontSize="md"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                >
                  {sid + 1} / {slidesCount}
                </Text> */}
                <AspectRatio>
                  <iframe
                    src={slide.vid}
                    width="640"
                    height="346"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
            ))}
          </Flex>

          {/* Arrow Controls */}
          <Text
            {...arrowStyles}
            left="0"
            onClick={prevSlide}
            color="white"
            bg="black"
            opacity="0.8"
            fontSize="3xl"
          >
            &#10094;
          </Text>
          <Text
            {...arrowStyles}
            right="0"
            onClick={nextSlide}
            color="white"
            bg="black"
            opacity="0.8"
            fontSize="3xl"
          >
            &#10095;
          </Text>

          {/* Dot Indicators */}
          <HStack justify="center" pos="absolute" bottom="4vh" w="full">
            {Array.from({ length: slidesCount }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", , "15px"]}
                m="0 2px"
                bg={
                  currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"
                }
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{ bg: "blackAlpha.800" }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
      </Flex>
    </Center>
  );
};

export default Carousel;
