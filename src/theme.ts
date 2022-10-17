import type { Theme } from 'theme-ui';

const colors = {
  text: '#000',
  background: '#fff',
  striped: '#f6f6f6',
  primary: '#33e123',
  meta: '#9b9b9b',
};

export const theme: Theme = {
  breakpoints: ['40em', '@media (min-width: 750px) and (orientation: landscape)', '64em'],
  fonts: {
    default: 'monospace',
  },
  colors,
  styles: {
    root: {
      fontFamily: 'default',
      scrollBehavior: 'smooth',
    },
    a: {
      color: 'primary',
    },
    hr: {
      color: 'meta',
    },
  },
  layout: {
    page: {
      background: ['yellow', 'orange', 'white'],
    },
    centered: {
      margin: '0 auto',
      width: ['100%', '850px', '1280px'],
    },
    block: {
      padding: ['100px 20px', '140px 0'],
      boxSizing: 'border-box',
    },
    menuHeader: {
      justifyContent: 'space-between',
      padding: 40,
      alignItems: 'center',
      fontWeight: 600,
      a: {
        textDecoration: 'none',
        ':hover': {
          textDecoration: 'underline',
        },
      },
    },
    menuFooter: {
      justifyContent: 'space-between',
      py: 40,
    },
    menuHeaderItems: {
      gap: 32,
      a: {
        fontSize: 20,
        textTransform: 'uppercase',
      },
    },
    menuFooterItems: {
      gap: 20,
      a: {
        fontSize: 16,
        textTransform: 'uppercase',
      },
    },
    colsCentered: {
      alignItems: ['flexStart', 'center'],
      flexDirection: ['column', 'row'],
    },
    cols: {
      flexDirection: ['column', 'row'],
      gap: 40,
    },
    element: {
      margin: '40px 0',
      display: 'inline-block',
    },
    column: {
      flexDirection: 'column',
      gap: 20,
    },
  },
  text: {
    h1: {
      fontSize: 92,
      fontWeight: 600,
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
    },
    h3: {
      fontSize: 22,
      fontWeight: 600,
      mt: '8px',
      display: 'inline-block',
    },
    big: {
      fontSize: 25,
    },
    just: {
      fontSize: 14,
      display: 'inline-block',
      mt: '8px',
    },
    meta: {
      color: 'meta',
      fontSize: 10,
    },
  },
};
