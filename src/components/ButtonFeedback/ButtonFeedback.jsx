import React from 'react';
import { StyledButton } from './ButtonFeedback.styled';
import PropTypes from 'prop-types';


export const ButtonFeedback = ({
  icon: Icon = null,
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {Icon && <Icon size="20" />}
      {children}
    </StyledButton>
  );
};

ButtonFeedback.propTypes = {
  icon: PropTypes.any,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};