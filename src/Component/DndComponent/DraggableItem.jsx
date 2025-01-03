import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Box, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const DraggableItem = ({ id, label, inputValue, onDragOut }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box ref={setNodeRef} style={style} {...attributes} {...listeners} onDragStart={() => onDragOut(id)}>
      {inputValue ? (
        <Typography m={'3px'} variant="body2" sx={{ cursor: 'grab' }} fontSize={{ xs: '10px', sm: '10px', md: '15px' }}>
          {label}
        </Typography>
      ) : (
        <ListItem
          sx={{
            bgcolor: 'white',
            my: '2%',
            borderRadius: '5px',
            fontSize: '5px',
            cursor: 'grab',
          }}
        >
          <ListItemIcon>
            <DragIndicatorIcon fontSize="medium" color={'primary'} />
          </ListItemIcon>
          <ListItemText secondary={label} sx={{ fontSize: '2px' }} />
        </ListItem>
      )}
    </Box>
  );
};


export default DraggableItem;