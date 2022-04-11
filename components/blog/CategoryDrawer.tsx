import {
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { Box } from '@mui/system';
import BackspaceIcon from '@mui/icons-material/Backspace';

const CategoryDrawer = ({ drawerOpen, setDrawerOpen, categories }: any) => {
  return (
    <div>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          marginY="0.5rem"
          paddingX="1rem"
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            color="error"
            variant="contained"
            size="small"
            startIcon={<BackspaceIcon />}
            onClick={() => setDrawerOpen(false)}
          >
            Exit
          </Button>
        </Box>
        <List>
          {categories.map((item: any) => (
            <ListItem button key={item.sys.id}>
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  alt={item.fields.name}
                  src={item.fields.banner.fields.file.url}
                />
              </ListItemAvatar>
              <ListItemText primary={item.fields.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default CategoryDrawer;
