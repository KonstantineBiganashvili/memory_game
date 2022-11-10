import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Flag } from '@mui/icons-material';
import './Rules.scss';

const Rules = () => {
  return (
    <List className="rules-container">
      <ListItem>
        <ListItemText>
          <strong>1. </strong>
          Your objective is to remember where the last location of the flag will
          be in this maze
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <strong>2. </strong>
          click <strong>START</strong> to start the maze
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <strong>3. </strong>
          <Flag /> Indicates start of the maze
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <strong>4. </strong>
          Directions will randomly appear on the bottom rows of boxes
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <strong>5. </strong>
          After all the directions appear, you have a certain amount of time to
          remember them and then they'll disappear again
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <strong>6. </strong>
          Click on the box where you think end position of the flag is
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default Rules;
