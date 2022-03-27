import React, { useState } from 'react';

import { IconButton, Tooltip, Typography } from '@mui/material';
import { Drawer } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';

import ExperienceCards from '../organisms/ExperienceCards';
import ProjectCards from '../organisms/ProjectCards';
import SkillCards from '../organisms/SkillCards';
import BlogCards from '../organisms/BlogCards';

import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

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
      case 'Projects':
        return <ProjectCards isDetailed={true} />;
      case 'Skills':
        return <SkillCards isDetailed={true} />;
      case 'Blogs':
        return <BlogCards isDetailed={true} />;
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

      <Tooltip
        title={<span style={{ fontSize: 13 }}>projects</span>}
        placement="left"
      >
        <IconButton
          aria-label="projects"
          onClick={() => toggleDrawer(true, 'Projects')}
        >
          <ArchitectureRoundedIcon
            sx={{ color: grey[700], width: 30, height: 30 }}
          />
        </IconButton>
      </Tooltip>

      <Tooltip
        title={<span style={{ fontSize: 13 }}>skills</span>}
        placement="left"
      >
        <IconButton
          aria-label="skills"
          onClick={() => toggleDrawer(true, 'Skills')}
        >
          <CodeOutlinedIcon sx={{ color: grey[700], width: 30, height: 30 }} />
        </IconButton>
      </Tooltip>

      <Tooltip
        title={<span style={{ fontSize: 13 }}>blogs</span>}
        placement="left"
      >
        <IconButton
          aria-label="blogs"
          onClick={() => toggleDrawer(true, 'Blogs')}
        >
          <BookOutlinedIcon sx={{ color: grey[700], width: 30, height: 30 }} />
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
