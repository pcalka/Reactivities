import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item>
          <img src="/assets/Images/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            Reactivities
        </Menu.Item>
        <Menu.Item name="messages" />
        <Menu.Item >
          <Button positive content='Create Activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
