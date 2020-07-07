import React from "react";
import * as UI from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container } from "react-bootstrap";

export interface BackLinkProps {
  url: string;
}

export const BackBtn: React.FC<BackLinkProps> = (props: BackLinkProps) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <UI.Button href={props.url}>
              <FontAwesomeIcon icon={faArrowLeft} /> Go Back
            </UI.Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
