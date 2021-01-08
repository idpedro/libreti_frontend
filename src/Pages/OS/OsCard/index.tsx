import React,{memo} from 'react';
import { CardWrapper, Header, Title, Description, Status } from './styles';

export interface OSCardInterface {
  id: number;
  subject: string;
  description: string;
  priority: string;
  status: string;
  client: String;
  technical?: string;
}

const OSCard: React.FC<OSCardInterface> = (props) => {
  return (
    <>
      <CardWrapper priority={props.priority}>
        <Header>
          <span>{props.subject}</span>
          <span>{'#' + props.id}</span>
        </Header>
        <h3>{props.client}</h3>
        <Title>{props.subject}</Title>
        <Description>
          {props.description.substr(0, 100).trim() + '...'}
        </Description>
        <Status>
          <span>{props.status}</span>
          {props.technical ? <span>Técnico {props.technical}</span> : <></>}
        </Status>
      </CardWrapper>
    </>
  );
};

export default memo(OSCard);
