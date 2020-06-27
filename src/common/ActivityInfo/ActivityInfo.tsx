import React from "react";
import * as UI from "./style";
import Card from "react-bootstrap/Card";

export const ActivityInfo: React.FC = () => {
  const title: string = `Data Science 101`;
  const description: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus metus lorem, id facilisis enim rutrum et. Vivamus a ligula non orci faucibus egestas a quis urna. Mauris fringilla efficitur quam non pulvinar. Nulla consectetur risus ultrices, pretium nibh vitae, lobortis mi. Aliquam fermentum arcu quis ex pellentesque molestie quis nec ex. Nunc vel eros porttitor, gravida erat ac, lacinia ligula. Donec nec risus rutrum, molestie dolor et, fringilla mi. Etiam ac interdum urna.
  Etiam eleifend quam sit amet purus viverra, ut finibus augue commodo. Aliquam quis semper quam, in lobortis elit. Morbi ac nisl vitae lacus egestas iaculis id eget justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec augue ex, tempus non risus nec, interdum sollicitudin justo. Donec pellentesque nulla quis risus commodo, in pulvinar risus placerat. Sed leo elit, pretium eu dignissim sit amet, congue at nulla. Duis ut orci quis nisi rhoncus rutrum eu sed massa. Donec congue magna mi, ac bibendum lectus ultricies sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam consequat, nisi quis fringilla auctor, lacus sapien aliquet felis, sed vulputate velit arcu ac tortor. Nam semper malesuada faucibus.
  Phasellus et ullamcorper ante. Donec euismod pharetra nunc sed congue. Morbi ante libero, auctor ut leo nec, ultrices iaculis felis. Duis a metus sit amet justo accumsan tristique eu sagittis justo. Duis porttitor sollicitudin dolor. Suspendisse erat nisl, dapibus at nunc vel, pellentesque commodo ligula. Suspendisse rutrum ex quis laoreet dictum. Donec consequat, ex eget pretium aliquet, purus arcu scelerisque tortor, ac scelerisque libero felis et dolor. Etiam fermentum et nisl vel congue. Vivamus ut vulputate arcu. Quisque ullamcorper, nulla sit amet posuere lacinia, lacus turpis posuere velit, quis viverra magna tortor sit amet ex. Praesent tempus vel risus nec molestie. Quisque aliquet congue scelerisque. Praesent dictum, dolor quis porta hendrerit, eros nibh consectetur quam, id rhoncus tellus urna ut erat. Phasellus tristique feugiat nunc nec semper.
  In suscipit justo nisl, venenatis fermentum quam elementum vitae. Fusce a risus vitae ante blandit pretium. Vestibulum vitae ante eu est interdum luctus. Quisque vitae consectetur nisi. Mauris porta tempus elit nec placerat. Phasellus dictum justo lectus, et luctus mauris laoreet at. Aliquam consectetur cursus tortor, nec sollicitudin tortor molestie vel. Donec lobortis elementum sem, sed bibendum justo consequat a. Cras dui libero, varius sit amet elit ut, aliquet tempus nibh.
  Nullam ligula turpis, dignissim ac elit et, aliquet condimentum diam. Ut ipsum metus, commodo in porta et, posuere sit amet justo. Sed viverra tristique bibendum. Proin varius ipsum nulla, sed pulvinar ligula aliquet in. Quisque interdum blandit porttitor. Sed ultrices nisl orci, a gravida mauris mollis a. Aenean et sapien sapien.`;
  const eventTime: string = `10:30am to 11:30am`;
  const speakerName: string = `Someone Important`;
  const speakerSocials: any = [
    {
      type: "Facebook",
      link: "#",
    },
    {
      type: "LinkedIn",
      link: "#",
    },
  ];
  const aboutSpeaker: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus metus lorem, id facilisis enim rutrum et.`;

  return (
    <>
      <UI.InfoContainer>
        <h2>{title}</h2>
        <br />
        <UI.Flexbox>
          <UI.DescriptionContainer>
            <p>{description}</p>
          </UI.DescriptionContainer>

          <UI.DetailsContainer>
            <UI.Button>🤔 Mark me interested</UI.Button>

            <Card style={{ width: "18em", marginBottom: "1em" }}>
              <Card.Body style={{ padding: "0.5em 1em" }}>
                <Card.Title style={{ fontWeight: "bold", marginBottom: "0px" }}>
                  When:
                </Card.Title>
                <Card.Text>{eventTime}</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18em", marginBottom: "1em" }}>
              <Card.Body style={{ padding: "0.5em 1em" }}>
                <Card.Title style={{ fontWeight: "bold", marginBottom: "0px" }}>
                  Presented By:
                </Card.Title>
                <Card.Text>{speakerName}</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18em", marginBottom: "1em" }}>
              <Card.Body style={{ padding: "0.5em 1em" }}>
                <Card.Title style={{ fontWeight: "bold", marginBottom: "0px" }}>
                  About the Speaker:
                </Card.Title>
                <UI.Flexbox style={{ margin: "0.5em 0em" }}>
                  {speakerSocials.map((social: any) => (
                    <Card.Link key={social.type} href={social.link}>
                      {social.type}
                    </Card.Link>
                  ))}
                </UI.Flexbox>
                <Card.Text>{aboutSpeaker}</Card.Text>
              </Card.Body>
            </Card>
          </UI.DetailsContainer>
        </UI.Flexbox>
      </UI.InfoContainer>
    </>
  );
};
