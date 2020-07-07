import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link"

export interface BackLinkProps {
  url: string;
}

export const BackBtn: React.FC<BackLinkProps> = (props: BackLinkProps) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Link href={props.url}>
              <a style={{margin: "1em 0em", display: "block"}}><FontAwesomeIcon icon={faArrowLeft} /> Go Back</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
