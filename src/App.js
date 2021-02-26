import React, {useEffect} from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './redux/actions/posts';
import { logo } from './assets';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './style';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">Memories</Typography>
        <img className={classes.image} src={logo} alt="logo" height="50"/>
      </AppBar>
      <Grow in> 
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form/>
              </Grid>
            </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
