import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import CopyToClipboard from 'react-copy-to-clipboard';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

type Props = {
  title?: string;
  setJpn?: (arg: boolean) => void;
  jpn?: boolean;
};

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    },
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: 'white'
  },
  button: {
    color: 'white'
  }
}));

const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
  setJpn,
  jpn
}) => {
  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const anchorRef = useRef<HTMLButtonElement>(null);
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const classes = useStyles();

  const handleClick = () => {
    setSnackOpen(true);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleSnackClose = (
    event?: React.SyntheticEvent<Element, Event>,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header>
        <div className={classes.root}>
          <AppBar position='static' style={{ backgroundColor: '#444444' }}>
            <Toolbar>
              <Grid container justify='space-between'>
                <Grid item style={{ marginTop: '15px' }}>
                  <Typography className={classes.title}>
                    <Button style={{ color: 'white' }} href='/'>
                      {!jpn ? 'Home' : 'ホーム'}
                    </Button>
                    <Button style={{ color: 'white' }} href='/resume'>
                      {!jpn ? 'Resume' : '履歴書'}
                    </Button>
                    <Button
                      style={{ color: 'white' }}
                      onClick={() => setJpn(!jpn)}>
                      {!jpn ? '日本語' : 'English'}
                    </Button>
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    style={{
                      color: 'white',
                      marginRight: '5px',
                      marginBottom: '15px'
                    }}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup='true'
                    onClick={handleToggle}>
                    {jpn ? '問い合わせ' : 'Contact'}
                  </Button>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal>
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === 'bottom'
                              ? 'center top'
                              : 'center bottom'
                        }}>
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id='menu-list-grow'>
                              <CopyToClipboard text='tonyitocole@gmail.com'>
                                <MenuItem
                                  value='tonyitocole@gmail.com'
                                  onClick={() => handleClick()}>
                                  tonyitocole@gmail.com
                                </MenuItem>
                              </CopyToClipboard>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                  <Link href='http://www.github.com/tonyito'>
                    <GitHubIcon
                      style={{
                        marginBottom: '2px',
                        marginRight: '12px',
                        color: '#fcfcfc',
                        height: '20px',
                        width: '20px'
                      }}
                    />
                  </Link>
                  <Link href='http://www.linkedin.com/in/tony-ito-cole'>
                    <LinkedInIcon
                      style={{ marginTop: '20px', color: '#fcfcfc' }}
                    />
                  </Link>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            open={snackOpen}
            autoHideDuration={6000}
            onClose={handleSnackClose}>
            <Alert onClose={handleSnackClose}>
              {!jpn
                ? 'Email address copied!'
                : 'メールアドレスがコピーされました！'}
            </Alert>
          </Snackbar>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
