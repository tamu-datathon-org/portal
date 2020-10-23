import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
/**
 * Footer ripped straight from gigabowser lmao
 */
export const Footer: React.FC<any> = () => (
  <>
    <div className="footer-section">
      <div id="footer" className="container">
        <div className="row justify-content-center py-3 align-items-center">
          <div className="col-lg-1 col-md-12 justify-center my-3 text-center">
            <img className="footer-logo" src="/static/img/logos/main.png" />
          </div>
          <div className="col-sm-12 col-md text-center my-3">
            <p>
              For any questions, please email us at{" "}
              <a href="mailto:connect@tamudatathon.com">
                connect@tamudatathon.com
              </a>
            </p>
            <span className="footer-doc-links">
              <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                MLH Code of Conduct
              </a>
              •<a href="https://2019.tamudatathon.com">2019 Datathon</a>
            </span>
          </div>
          <div className="col-sm-12 col-md my-3 footer-social-link-container">
            <a
              className="px-2 footer-social-link"
              href="https://www.instagram.com/tamudatathon/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
            <a
              className="px-2 footer-social-link"
              href="https://www.linkedin.com/company/tamudatathon"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </a>
            <a
              className="px-2 footer-social-link"
              href="https://twitter.com/tamudatathon"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
            <a
              className="px-2 footer-social-link"
              href="https://www.facebook.com/tamudatathon/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
            <a
              className="px-2 footer-social-link"
              href="https://medium.com/@tamudatathon"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "medium"]} size="2x" />
            </a>
            <a
              className="px-2 footer-social-link"
              href="https://github.com/tamu-datathon-org/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-section" style={{ backgroundColor: "#120d3a" }}>
      <div id="footer" className="container py-4">
        <p className="vercel-promo m-0">
          <a
            href="https://vercel.com?utm_source=tamu-datathon&utm_campaign=oss"
            target="_blank"
            rel="noreferrer"
          >
            Powered by{" "}
            <img
              src="/static/img/sponsors/vercel.svg"
              alt="Vercel"
              height="25rem"
            />
          </a>
        </p>
      </div>
    </div>
  </>
);
