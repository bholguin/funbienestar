import { styled } from '@mui/material';

export namespace Styled {
  export const Content = styled('section')(({ theme }) => ({
    backgroundColor: '#FAF6F1',
    width: '100%',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'start',
    gap: '.5rem',
    borderBottom: '5px solid rgba(38, 42, 49, .7)',
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
    },
  }));

  export const Title = styled('p')(({ theme }) => ({
    fontWeight: '800',
    fontSize: '1.3rem',
    margin: '0',
    color: 'rgba(38, 42, 49, .8)',
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  }));

  export const Text = styled('p')(({ theme }) => ({
    fontSize: '1rem',
    margin: '0',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  }));

  export const Link = styled('a')(({ theme }) => ({
    color: 'rgba(38, 42, 49, .8)',
    textDecoration: 'underline',
    fontSize: '.9rem',
    marginLeft: '5px',
  }));
}
