import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import DraggableItem from './DraggableItem';

const DroppableField = ({ id, value, onDragOut, onValueChange }) => {
  const { setNodeRef } = useDroppable({ id });

 

  const style = {
    borderRadius: '8px',
  };

  return (
    <Box
      ref={setNodeRef}
      style={style}
      display={'flex'}
      width={'100%'}
      p={'5px'}
      my={1}
      sx={{ border: value === '' ? '1px solid #bbdefb' : '1px solid gray' }}
    >
      <Box
        px={1}
        mr={1}
        sx={{
          fontSize: '20px',
          color: 'white',
          bgcolor: value === '' ? '#bbdefb' : '#2196f3',
          borderRadius: '10px',
        }}
      >
        {`#${id}`}
      </Box>
      {value ? (
        <DraggableItem
          key={id}
          id={id}
          label={value}
          inputValue={true}
          onDragOut={() => onDragOut(id)}
        />
      ) : (
        <InputBase
          placeholder="Drop Here"
          value={value}
          size="small"
          variant="outlined"
          fullWidth
          sx={{ borderRadius: '10px' }}
        />
      )}
    </Box>
  );
};

export default DroppableField;
