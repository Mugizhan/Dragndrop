import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import DroppableField from './DroppableField'

const Content = ({ mostEnjoyFields, somewhatEnjoyFields, leastEnjoyFields, setMostEnjoyFields, setSomewhatEnjoyFields, setLeastEnjoyFields, setOptions }) => {
 
  return (
    <div>
          <Box width={{sx:'100%',sm:'100%',md:'80%'}} >
          <Typography variant='h6' fontWeight={'bold'}>
            A. Tell us how much you enjoy
          </Typography><br/>
          <Box sx={{border:'1px solid black',borderTop:"5px solid #2196f3",borderRadius:'10px'}} width={'100%'}>
          <Grid2 container width={'95%'} spacing={2} mt={2} mx={1}>

{/* tab 1.1 */}
<Grid2 item size={4}>
  <Typography variant='h6' color='black' fontSize={{ md: "15px", sm: '12px', xs: '12px' }}>
    I enjoy most
  </Typography>
  {Object.keys(mostEnjoyFields).map((index) => (
    <Grid2 item size={6} key={index} width={'100%'}>
      <Box>
        <DroppableField
          id={index}
          value={mostEnjoyFields[index]}
          onDragOut={(id) => {
            const label = mostEnjoyFields[id];
            setMostEnjoyFields((prev) => ({ ...prev, [id]: "" }));
            setOptions((prev) => [...prev, { id, label }]);
          }}
        />
      </Box>
    </Grid2>
  ))}
</Grid2>

{/* tab 1.2 */}
<Grid2 item size={4}>
  <Typography variant='h6' color='black' fontSize={{ md: "15px", sm: '12px', xs: '12px' }}>
    I somewhat enjoy
  </Typography>
  {Object.keys(somewhatEnjoyFields).map((index) => (
    <Grid2 item size={6} key={index} width={'100%'}>
      <Box>
        <DroppableField
          id={index}
          value={somewhatEnjoyFields[index]}
          onDragOut={(id) => {
            const label = somewhatEnjoyFields[id];
            setSomewhatEnjoyFields((prev) => ({ ...prev, [id]: "" }));
            setOptions((prev) => [...prev, { id, label }]);
          }}
        />
      </Box>
    </Grid2>
  ))}
</Grid2>

{/* tab 1.3 */}
<Grid2 item size={4}>
  <Typography variant='h6' color='black' fontSize={{ md: "15px", sm: '12px', xs: '12px' }}>
    I least enjoy
  </Typography>
  {Object.keys(leastEnjoyFields).map((index) => (
    <Grid2 item size={6} key={index} width={'100%'}>
      <Box>
        <DroppableField
          id={index}
          value={leastEnjoyFields[index]}
          onDragOut={(id) => {
            const label = leastEnjoyFields[id];
            setLeastEnjoyFields((prev) => ({ ...prev, [id]: "" }));
            setOptions((prev) => [...prev, { id, label }]);
          }}
        />
      </Box>
    </Grid2>
  ))}
</Grid2>

</Grid2>

</Box>

          </Box>

    </div>
  )
}

export default Content