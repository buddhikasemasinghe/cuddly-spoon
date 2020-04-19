import React from 'react';
import { useNavigate, navigate } from "@reach/router"

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PublicIcon from '@material-ui/icons/Public';


export const mainListItems = (
  <div>
    <ListItem button onClick={() => navigate('/')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={() => navigate('/main')}>
      <ListItemIcon>
        <DirectionsRunIcon />
      </ListItemIcon>
      <ListItemText primary="Compare" />
    </ListItem>
    <ListItem button onClick={() => navigate('/country')}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Country Profile" />
    </ListItem>
    <ListItem button onClick={() => navigate('/world')}>
      <ListItemIcon>
        <PublicIcon />
      </ListItemIcon>
      <ListItemText primary="Interactive" />
    </ListItem>
  </div>
);