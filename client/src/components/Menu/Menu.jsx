import { useState } from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";

import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircle";
import SchoolIcon from "@mui/icons-material/School";

import Logo from "../../assets/png/Logo.png";

function Menu({ children }) {
  const xsBreakPoint = useMediaQuery("(max-width: 600px)");
  const [open, setOpen] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(true);

  return (
    <Box display="flex">
      {xsBreakPoint && (
        <AppBar
          color="secondary"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem",
          }}
        >
          <img src={Logo} style={{ height: "2.5rem" }} />

          <IconButton
            onClick={() => setOpen(!open)}
            style={{
              width: "3.5rem",
              padding: "1rem",
              float: "left",
              position: "absolute",
              right: 0,
            }}
          >
            <MenuIcon
              className="menuIcon"
              style={{
                transform: `rotate(${open ? "90deg" : 0})`,
                transition: "transform 0.3s",
              }}
            />
          </IconButton>
        </AppBar>
      )}

      <Drawer
        variant="permanent"
        open={open}
        archor="left"
        color="secondary"
        sx={{
          "& .MuiDrawer-paper": xsBreakPoint
            ? { height: open ? "100vh" : 0 }
            : { width: open ? "15rem" : "3.375rem" },
        }}
      >
        <List style={{ display: "flex", flexDirection: "column" }}>
          {!xsBreakPoint && (
            <img
              src={Logo}
              style={{
                width: "6.25rem",
                alignSelf: "center",
                marginBottom: open ? "1.5rem" : 0,
                height: open ? "auto" : 0,
                transition: "all 0.3s",
              }}
            />
          )}

          <Tooltip
            title={openTooltip ? "Página inicial" : ""}
            placement="right"
            arrow
          >
            <NavLink to="/dashboard">
              <ListItem disablePadding className={open ? "opened" : ""}>
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => setOpenTooltip(true), 300);
                  }}
                >
                  <ListItemIcon>
                    <HomeIcon className="menuIcon" />
                  </ListItemIcon>

                  <ListItemText primary="Página inicial" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </Tooltip>

          <NavLink to="/cadastros">
            <Tooltip
              title={openTooltip ? "Cadastros" : ""}
              placement="right"
              arrow
            >
              <ListItem disablePadding className={open ? "opened" : ""}>
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => setOpenTooltip(true), 300);
                  }}
                >
                  <ListItemIcon>
                    <AddCircleOutlineIcon className="menuIcon" />
                  </ListItemIcon>

                  <ListItemText primary="Cadastros" />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          </NavLink>

          <NavLink to="/alunos">
            <Tooltip
              title={openTooltip ? "Alunos" : ""}
              placement="right"
              arrow
            >
              <ListItem disablePadding className={open ? "opened" : ""}>
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => setOpenTooltip(true), 300);
                  }}
                >
                  <ListItemIcon>
                    <SchoolIcon className="menuIcon" />
                  </ListItemIcon>

                  <ListItemText primary="Alunos" />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          </NavLink>
        </List>

        {!xsBreakPoint && (
          <ListItem
            disablePadding
            className={open ? "opened" : ""}
            style={{ marginBottom: "1.5rem" }}
          >
            <ListItemButton
              onClick={() => {
                setOpen(!open);
                setOpenTooltip(!openTooltip);
              }}
              style={{ justifyContent: "right", paddingLeft: "2.5rem" }}
            >
              <ListItemIcon style={{ minWidth: "auto" }}>
                <KeyboardArrowRightIcon
                  className="menuIcon"
                  style={{
                    transform: `rotate(${open ? "180deg" : 0})`,
                    transition: "transform 0.3s",
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        )}
      </Drawer>

      <Box
        sx={{
          flexGrow: 1,
          p: xsBreakPoint ? "4.5rem 1.5rem 1.5rem 1.5rem" : "2rem 3rem",
          ml: open && !xsBreakPoint ? "15rem" : "3.375rem",
          ...(xsBreakPoint && { m: 0 }),
          transition: "margin 0.3s",
          overflow: "hidden",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Menu;
