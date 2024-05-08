import { extendTheme } from '@chakra-ui/react';

import { colorScheme } from '@/config/theme/color-scheme';
import { componentTheme } from '@/config/theme/component-theme';

export const themeConfig = extendTheme({
  colors: { ...colorScheme },
  components: { ...componentTheme },
});
