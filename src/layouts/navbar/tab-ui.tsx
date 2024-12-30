import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'bg-twitter-dark', borderBottom: 1 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          '.MuiTabs-flexContainer': {
            justifyContent: 'space-around',
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
