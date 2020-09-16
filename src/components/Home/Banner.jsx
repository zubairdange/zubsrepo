import React from 'react';
import { Row, Col, Button,DropdownButton,Dropdown, Card } from 'react-bootstrap';

export const Banner = () => {
    return (  <div>
        <Card>
        <Row>
            <Col>
        <Button variant="success">Click here to show</Button></Col>
        <Col>
    
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>

</Col>
</Row>
</Card>
    </div>);
}
 