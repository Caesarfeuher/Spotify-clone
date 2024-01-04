import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import Grid from '@mui/material/Grid' // or import { Grid } from '@mui/material';
import Slider from '@mui/material/Slider' // orimport { Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='Footer'>
        <div className='Footer__left'>
            <img 
            className='Footer__albumLogo'
            src='https://cdns-images.dzcdn.net/images/cover/adcd78c01e7cff0dcdc64dfcaaeb7b2a/264x264.jpg' 
            alt='' />
            <div className='Footer__songInfo'>
              <h4>yeah</h4>
              <p>usher</p>
            </div>
        </div>
        <div className='Footer__center'>
       <ShuffleIcon className='Footer__green' />
       <SkipPreviousIcon className='Footer__icon' />
       <PlayCircleOutlineIcon fontSize='large'className='Footer__icon' /> 
       <SkipNextIcon className='Footer__icon' />
       <RepeatIcon className='Footer__green' />
        </div>
        <div className='Footer__right'>
          <Grid container spacing={2}>
              <Grid item>
                <PlaylistPlayIcon />
              </Grid>
              <Grid item>
                <VolumeDownIcon />
              </Grid>
              <Grid item xs>
                <Slider />
              </Grid>
          </Grid>
        <p>Volume controls</p>
        </div>
    </div>
  )
}

export default Footer;