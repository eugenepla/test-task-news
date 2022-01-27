import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        smd: 800,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

export default theme;