import React, { useState } from 'react';
import { Box } from '@mui/system';
import StyledBadge from '../atoms/StyledBadge';
import { Avatar, ButtonBase, Drawer, IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MobileLinksBar from './MobileLinksBar';

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
        component={IconButton}
        onClick={() => setSectionBarOpen(!sectionBarOpen)}
      >
        <MenuRoundedIcon />
      </Box>

      <Drawer
        anchor="left"
        open={linksBarOpen}
        onClose={() => setLinksBarOpen(false)}
        PaperProps={{ sx: { padding: '20px', width: 'fit-content' } }}
      >
        <MobileLinksBar />
      </Drawer>
    </Box>
  );
}

export default MobileHeader;
