import React from "react";
import { Nav, Menu, Header, Button, Grommet } from "grommet";
import { TreeOption } from "grommet-icons";

const PlaceHolderNav = () => (
  <Header background="brand">
    <Menu label="account" items={[{ label: "logout" }]} />
  </Header>
);

export default PlaceHolderNav;
