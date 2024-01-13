import React, { FC } from 'react';
import './topbar.scss';
import { Button } from 'react-bootstrap';

interface TopbarProps {}

const Topbar: FC<TopbarProps> = () => (
  <div className="topbar" data-testid="Topbar">
    Topbar Component
    <Button variant="secondary">myButton</Button>{' '}
  </div>
);

export default Topbar;
