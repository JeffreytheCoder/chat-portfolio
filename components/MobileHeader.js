import { Box } from '@mui/system';
import React, { useState } from 'react';
import StyledBadge from './StyledBadge';
import { Avatar, ButtonBase, Drawer, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function MobileHeader() {
  const [linksBarOpen, setLinksBarOpen] = useState(false);
  const [sectionBarOpen, setSectionBarOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        paddingLeft: '12px',
        paddingRight: '20px',
        paddingY: '5px',
        justifyContent: 'space-between',
      }}
    >
      <Box
        component={ButtonBase}
        onClick={() => setLinksBarOpen(!linksBarOpen)}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar src="/avatar.jpg" sx={{ width: '50px', height: '50px' }} />
        </StyledBadge>
      </Box>

      <Box
        component={ButtonBase}
        onClick={() => setSectionBarOpen(!sectionBarOpen)}
      >
        <MenuRoundedIcon />
      </Box>

      <Drawer
        anchor="left"
        open={linksBarOpen}
        onClose={() => setLinksBarOpen(false)}
        PaperProps={{ sx: { width: '40%' } }}
      ></Drawer>
    </Box>
  );
}

export default MobileHeader;
