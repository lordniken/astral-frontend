import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import DashboardLayout, { Header, Sidebar, Container } from './index';
import {
  Nav,
  NavLink,
  NavDropdown,
  NavDropdownLink,
} from './Sidebar';
import {
  MainTitle,
} from './Header';

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="white" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

storiesOf('Layouts/Dashboard', module).add('Layout', () => (
  <MemoryRouter initialEntries={['/']}>
    <DashboardLayout>
      <Sidebar>
        <Nav>
          <NavLink
            to="/"
            icon={Icon}
            text="Sample text"
          />
          <NavLink
            to="/"
            icon={Icon}
            text="Sample text"
          />
          <NavLink
            to="/"
            icon={Icon}
            text="Sample text"
          />
          <NavDropdown icon={Icon} text="Dropdown">
            <NavDropdownLink
              to="/"
              text="Sample text"
            />
            <NavDropdownLink
              to="/"
              text="Sample text"
            />
            <NavDropdownLink
              to="/"
              text="Sample text"
            />
            <NavDropdownLink
              to="/"
              text="Sample text"
            />
            <NavDropdownLink
              to="/"
              text="Sample text"
            />
          </NavDropdown>
        </Nav>
      </Sidebar>
      <Container>
        <Header>
          <MainTitle>
            Main Title
          </MainTitle>
        </Header>
      </Container>
    </DashboardLayout>
  </MemoryRouter>
));