import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useScrollTrigger, useTheme, useMediaQuery } from '@mui/material';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  const trigger = useScrollTrigger({
    threshold: 10,
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: trigger ? '#1e1e1e' : '#000000',
        height: isSmallScreen ? '60px' : '50px', 
        position: 'sticky',
        top: 0,
        zIndex: 10,
        transition: 'background-color 0.3s ease',
        borderBottom: '1px solid #38444d',
        borderRight: '1px solid #38444d',
        padding: isSmallScreen ? '0 95px' : '0 20px', 
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant={isSmallScreen ? 'scrollable' : 'standard'} 
        scrollButtons="auto" 
        sx={{
          '.MuiTabs-flexContainer': {
            justifyContent: isSmallScreen ? 'flex-start' : 'space-around',
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
            textTransform: 'capitalize',
            fontSize: isSmallScreen ? '0.9rem' : '1rem', 
            '&.Mui-selected': {
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            },
          }}
        />
        <Tab
          label="Following"
          sx={{
            color: 'gray',
            fontWeight: 'normal',
            textTransform: 'capitalize',
            fontSize: isSmallScreen ? '0.9rem' : '1rem', 
            '&.Mui-selected': {
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            },
          }}
        />
      </Tabs>
    </Box>
  );
}
