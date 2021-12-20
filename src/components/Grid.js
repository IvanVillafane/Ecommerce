import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


 const Grid =() => {
     return( 
     <div>
      <Grid container>
          <Grid item xs={12}>
              <Box border={2}>xs12
              </Box>
          </Grid>

          <Grid item xs={12}>
              <Box border={2}>xs12
              </Box>
          </Grid>

          <Grid item xs={12}>
              <Box border={2}>xs12
              </Box>
          </Grid>

          <Grid item xs={12}>
              <Box border={2}>xs12
              </Box>
          </Grid>
      </Grid>
     </div>)
 }