import {
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useEffect, useState } from 'react';
import client from '../../utils/contentfulClient';

const CategoryDrawer = ({ drawerOpen, setDrawerOpen }: any) => {
  const [categories, setCategories] = useState<null | []>(null);

  useEffect(() => {
    async function getCategories() {
      let data = await client.getEntries({
        content_type: 'category',
      });

      setCategories(data.items);
    }

    getCategories();
  }, []);

  return (
    <div>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {!categories ? (
          <Box padding="1rem">
            <Skeleton
              sx={{ bgcolor: 'grey.900', marginBottom: '1rem' }}
              variant="rectangular"
              width="100%"
              height="100%"
            />
            <Typography variant="h6"> Loading Categories...</Typography>
          </Box>
        ) : (
          <>
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
          </>
        )}
      </Drawer>
    </div>
  );
};

export default CategoryDrawer;
