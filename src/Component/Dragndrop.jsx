import React, { useState } from 'react';
import Content from './DndComponent/COntent';
import { useTheme } from '@mui/material/styles';
import DraggableItem from './DndComponent/DraggableItem';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from './images/logo.png';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { DndContext, closestCenter, useSensors, useSensor, MouseSensor, TouchSensor} from '@dnd-kit/core';


const Dragndrop = () => {
  const theme = useTheme(); 
   const [mostEnjoyFields, setMostEnjoyFields] = useState({
    1:'', 2: '',3:'',4:'',5:'',6:'' 
    });
    const [somewhatEnjoyFields, setSomewhatEnjoyFields] = useState({
      7:'', 8: '', 9:'', 10:'', 11:'',12:'' 
    });
    const [leastEnjoyFields, setLeastEnjoyFields] = useState({
      13:'', 14:'', 15:'', 16:'', 17:'', 18:'' 
    });
    
   const [options, setOptions] = useState([
      { id: 'a', label: 'achieve Goal' },
      { id: 'b', label: 'assisting Others' },
      { id: 'c', label: 'guiding Others' }, 
      { id: 'd', label: 'researching' },
      { id: 'e', label: 'smart planing' },
      { id: 'f', label: 'hormonizing' },
      { id: 'g', label: 'bonding' },
      { id: 'h', label: 'energizing others' },
      { id: 'i', label: 'challenging and winning' },
      { id: 'j', label: 'caring' },
      { id: 'k', label: 'advising' },
      { id: 'l', label: 'logical reasoning' }
    ]);

    const [parking,setParking]=useState([])

    const sensors=useSensors(
      useSensor(MouseSensor),
      useSensor(TouchSensor,{
       activationConstraint:{
        delay:200,
        tolarance:5
       }
      })
    )

    const handleDropEnd = (event) => {
      const { active, over } = event;
      console.log('active',active.id)
      console.log('over',over.id)
      if (over) {
        const activeOption = options.find((o) => o.id === active.id) || parking.find((o) => o.id === active.id);
        const newLabel = activeOption?.label || mostEnjoyFields[active.id] || somewhatEnjoyFields[active.id] || leastEnjoyFields[active.id];
        console.log("active.id :",active.id,'|| newLabel :',newLabel)
        if (mostEnjoyFields[over.id] !== undefined) {
          const previousValue = mostEnjoyFields[over.id];
          setMostEnjoyFields((prev) => ({ ...prev, [over.id]: newLabel }));
          handleFieldReset(active.id, previousValue);
        } else if (somewhatEnjoyFields[over.id] !== undefined) {
          const previousValue = somewhatEnjoyFields[over.id];
          setSomewhatEnjoyFields((prev) => ({ ...prev, [over.id]: newLabel }));
          handleFieldReset(active.id, previousValue);
        } else if (leastEnjoyFields[over.id] !== undefined) {
          const previousValue = leastEnjoyFields[over.id];
          setLeastEnjoyFields((prev) => ({ ...prev, [over.id]: newLabel }));
          handleFieldReset(active.id, previousValue);
        }
    
          setOptions((prev) => prev.filter((o) => o.id !== active.id));
      }
    };
    
    const handleFieldReset = (id, previousValue) => {
      if (mostEnjoyFields[id]) {
        setMostEnjoyFields((prev) => ({ ...prev, [id]: '' }));
      } else if (somewhatEnjoyFields[id]) {
        setSomewhatEnjoyFields((prev) => ({ ...prev, [id]: '' }));
      } else if (leastEnjoyFields[id]) {
        setLeastEnjoyFields((prev) => ({ ...prev, [id]: '' }));
      }
      if (previousValue) {
        setParking((prev) => [...prev, { id, label: previousValue }]);
      }
    };


  return (
    <Box m={0} sx={{ display: 'flex', height: '100vh' }}>
        <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDropEnd}
      display={'flex'}
      flexDirection={'column'}
      >
        <Box flex={4} display={{md:'flex'}}  w={'100%'} >
      <Box w={'100%'}>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', zIndex: 1}} >
        <Toolbar sx={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
          <Box display={'flex'} alignItems={'center'}>
            <img src={Logo} style={{ width: '15%' }} alt="" />
            <Typography color="primary" variant="h6" fontWeight={'bold'} sx={{ fontSize: { xs: '13px', md: '16px' } }}>
              GATEWAY OF A CHAMPION
            </Typography>
          </Box>
          <Box>
          <Typography color="gray" variant="h6" sx={{ fontSize: { xs: '10px', md: '15px' } }}>
              sample@gmail.com
            </Typography>
            
          </Box>
        </Toolbar>
        
      </AppBar>
      <Divider/>
      <Box
  display={'flex'}
  width={'100%'}
  height={{ md: '100vh' }}
  justifyContent={'center'}
  margin={{md:'10%'}}
>
<Content
                mostEnjoyFields={mostEnjoyFields}
                somewhatEnjoyFields={somewhatEnjoyFields}
                leastEnjoyFields={leastEnjoyFields}
                setMostEnjoyFields={setMostEnjoyFields}
                setSomewhatEnjoyFields={setSomewhatEnjoyFields}
                setLeastEnjoyFields={setLeastEnjoyFields}
                setOptions={setOptions}
              />
</Box>


      </Box>
      <Box flex={1} sx={{ bgcolor: theme.palette.primary.main,maxHeight: '100vh', width: '100%' }}>
      <Box flex={1} sx={{ bgcolor: theme.palette.primary.main, height: 'fit-content',width: '100%' }}>
      <Typography variant='h6' fontSize={"20px"} m={2} fontWeight={'bold'} sx={{color:'white'}}>
            Action Elements
          </Typography>
      <Box flex={1} mx={2} display={'flex'} flexDirection={'column'}>
            <List>
              {options.map((item) => (
                <DraggableItem key={item.id} id={item.id} label={item.label} />
              ))}
            </List>
          </Box>

              {
                parking.length==0?
                <Box></Box>
                :<Typography variant='h6' fontSize={"20px"} m={2} fontWeight={'bold'} sx={{color:'white'}}>
                Parking Elements
              </Typography>
              }
    

      <Box flex={1} mx={2} display={'flex'} flexDirection={'column'}>
            <List>
              {parking.map((item) => (
                <DraggableItem key={item.id} id={item.id} label={item.label}  />
              ))}
            </List>
          </Box>


      </Box>
      </Box></Box>
      </DndContext> 
    </Box>
  );
};

export default Dragndrop;