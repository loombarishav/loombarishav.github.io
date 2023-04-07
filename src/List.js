import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ItemList({ data }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data.map(({item}, index) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={item.title}
              secondary={
                <React.Fragment>
                  {item.path && <Typography
                    component="p"
                    variant="body3"
                    color="text.secondary"
                  >
                    {item.path}
                  </Typography>}
                  <Typography
                    component="p"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.url}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider component="li" />
        </>
      ))}
    </List>
  );
}
