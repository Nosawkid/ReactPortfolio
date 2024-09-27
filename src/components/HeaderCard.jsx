import { Card, CardBody } from "react-bootstrap";

const HeaderCard = ({ icon: Icon, text, link }) => {
  return (
    <div>
      <Card.Link className="custom-link" href={link}>
        <Card>
          <CardBody>
            <p className="m-0">
              <Icon className="fs-2" />
              &nbsp; &nbsp;{text}
            </p>
          </CardBody>
        </Card>
      </Card.Link>
    </div>
  );
};

export default HeaderCard;
