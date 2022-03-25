import React, { useState } from 'react';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import {
  Button,
  ButtonBase,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { Drawer } from '@mui/material';
import ExperienceCards from './ExperienceCards';
import { grey } from '@mui/material/colors';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Box } from '@mui/system';

function SectionsBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [section, setSection] = useState('');

  const toggleDrawer = (isOpen, section) => {
    setSection(section);
    setDrawerOpen(isOpen);
  };

  const DrawerLayout = () => {
    return (
      <div sx={{ padding: 20 }}>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <IconButton
            onClick={() => toggleDrawer(false, '')}
            sx={{ margin: 2 }}
          >
            <ArrowBackIosNewRoundedIcon />
          </IconButton>
          <Typography variant="h6">{section}</Typography>
        </Box>
        <Box sx={{ marginX: 2 }}>
          <DrawerContent />
        </Box>
      </div>
    );
  };

  const DrawerContent = () => {
    switch (section) {
      case 'Experience':
        return <ExperienceCards isDetailed={true} />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Tooltip
        title={<span style={{ fontSize: 13 }}>experience</span>}
        placement="left"
      >
        <IconButton
          aria-label="experience"
          onClick={() => toggleDrawer(true, 'Experience')}
        >
          <WorkOutlineIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </Tooltip>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false, '')}
      >
        <DrawerLayout />
      </Drawer>
    </>
  );
}

export default SectionsBar;
