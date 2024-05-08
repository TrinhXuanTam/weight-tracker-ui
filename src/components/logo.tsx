import { Text, HStack, Heading, Image } from '@chakra-ui/react';
import dumbell from '@/assets/images/dumbell.svg';
import { colorPalette } from '@/config/theme/color-palette';

export function Logo() {
  return (
    <HStack>
      <Image src={dumbell} alt='Dumbell' width='6rem' height='auto' />
      <Heading lineHeight={1.1} fontSize={{ base: '5xl', lg: '6xl' }}>
        Track.
        <Text as='span' bgGradient={colorPalette.primaryGradient} bgClip='text'>
          me
        </Text>{' '}
      </Heading>
    </HStack>
  );
}
