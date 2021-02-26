import React from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';

import { logo } from './Assets';
import Posts from './Posts/Posts';
import Form from './Form/Form';

import useStyles from './style';

const App = () => {
  const classes = useStyles();

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
