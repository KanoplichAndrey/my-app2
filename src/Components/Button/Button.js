import React from 'react';
// import { Link } from 'react-router-dom';
const commonClass = 'default-button';

const Button = ({ customClass = '', text = 'Default', onClick, ...attrs }) => {
  const Tag = attrs.href ? 'a' : 'button';
  return <Tag {...attrs} className={`${commonClass} ${customClass}`} onClick={onClick}  > {text}</Tag>
};

export default Button;