import { createMuiTheme } from '@material-ui/core/styles';

const isDarkMode = window.localStorage.getItem('darkMode');

const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? 'light' : 'dark',
    },
});

export default theme;