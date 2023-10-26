import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
/**
 * Footer ripped straight from gigabowser lmao
 */

/* eslint-disable */
export const Footer: React.FC<any> = () => (
  <>
    <div id="footer" className="section fold-corner">
    <div className="row">

        <div className="column td-logo-div">
        <img className="td-logo" src="/static/img/logos/main-23.svg"/>
        </div>
        <div className="column text-content">
        <p>
            For any questions, please email us at 
            <a id="email-link" href="mailto:connect@tamudatathon.com">connect@tamudatathon.com</a>
            <br/>
            <a id="MLH-link" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>
            <br/>
            <a id="prev-year-link" href="https://2022.tamudatathon.com/">2022 Datathon</a>
        </p>
        </div>
        <div className="column social-links">
        <a id='social-link' href="https://github.com/tamu-datathon-org/">
            <img className="social-logo" src="/static/img/social-logos/github.svg"/>
        </a>
        <a id='social-link' href="https://www.facebook.com/tamudatathon/">
            <img className="social-logo" src="/static/img/social-logos/facebook.svg"/>
        </a>
        <a id='social-link' href="https://www.instagram.com/tamudatathon/">
            <img className="social-logo" src="/static/img/social-logos/instagram.svg"/>
        </a>
        <a id='social-link' href="https://tamudatathon.com/guild">
            <img className="social-logo" src="/static/img/social-logos/discord.svg"/>
        </a>
        <a id='social-link' href="https://www.linkedin.com/company/tamudatathon/">
            <img className="social-logo" src="/static/img/social-logos/linkedin.svg"/>
        </a>
        </div>
    </div>
    <div className="row">
        <a id="social-link" href="https://vercel.com/?utm_source=tamu-datathon&utm_campaign=oss">
        <img  src="/static/img/sponsors/powered-by-vercel.svg"/>
        </a>
    </div>
    </div>
  </>
);
