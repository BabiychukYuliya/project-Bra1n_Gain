import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Heading = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(15 / 14);
  color: ${props => props.theme.colors.ltSideBarTextColor};
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const UserNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  padding: 16px 20px;
  gap: 2px;
  color: ${props => props.theme.colors.ltSideBarTextColor} !important;

  &.active {
    color: ${props => props.theme.colors.primaryColor} !important;
    background: ${props => props.theme.colors.ltMainAccentColor};
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Icon = styled.svg`
  transform: scale(0.85);
  margin-right: 10px;
  stroke: ${props => props.theme.colors.ltSideBarTextColor};

  &.active {
    stroke: ${props => props.theme.colors.primaryColor};
  }

  @media screen and (min-width: 768px) {
    transform: scale(1);
  }
`;

export const IconStatistic = styled.svg`
  margin-right: 10px;
  fill: ${props => props.theme.colors.ltSideBarTextColor};

  &.active {
    fill: ${props => props.theme.colors.primaryColor};
  }

`;