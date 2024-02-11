import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './Tags.css'; 

const Tags = ({ text, color }) => {
  return (
    <Badge bg={color} className="container-badge">
      {text}
    </Badge>
  );
}

export default Tags;
