import React from 'react';
import { CardWrapper, Header, Title, Description,Status } from './styles';

export interface OSCardInterface {
  id: number;
  nameClient: String;
  title: string;
  description: string;
  priority: string;
  status: string;
}

const OSCard: React.FC<OSCardInterface> = (props) => {
  return (
    <>
      <CardWrapper priority={props.priority}>
        <Header>
          <span>{props.title}</span>
          <span>{'#' + props.id}</span>
        </Header>
        <Title>{props.title}</Title>
        <Description>
          {props.description.substr(0, 100).trim() + '...'}
        </Description>
        <Status>
          <span>{props.status}</span>
          <span>{props.status}</span>
        </Status>
      </CardWrapper>
    </>
  );
};

export default OSCard;
