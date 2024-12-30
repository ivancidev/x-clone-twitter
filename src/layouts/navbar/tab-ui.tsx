import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useScrollTrigger } from '@mui/material';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const trigger = useScrollTrigger({
    threshold: 10,
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: trigger ? '#1e1e1e' : '#000000',
        height: '50px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        transition: 'background-color 0.3s ease',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          '.MuiTabs-flexContainer': {
            justifyContent: 'space-around',
          },
        }}
        TabIndicatorProps={{
          style: {
            height: '4px',
            backgroundColor: '#1DA1F2',
            borderRadius: '10px',
          },
        }}
      >
        <Tab
          label="For you"
          sx={{
            color: 'gray',
            fontWeight: 'normal',
            '&.Mui-selected': {
              color: 'white',
              fontWeight: 'bold',
            },
          }}
        />
        <Tab
          label="Following"
          sx={{
            color: 'gray',
            fontWeight: 'normal',
            '&.Mui-selected': {
              color: 'white',
              fontWeight: 'bold',
            },
          }}
        />
      </Tabs>
    </Box>
  );
}
