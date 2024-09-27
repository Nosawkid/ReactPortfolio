import { Col, Container, Row } from "react-bootstrap";
import avatar from "/assets/avatar.avif";
import HeaderCard from "./HeaderCard";
import { FaLaptopCode } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <Container className="py-5 px-2 header">
        <Row>
          <Col md={6} className="text-center text-md-start">
            <img
              className="mb-4"
              src={avatar}
              alt="Avatar of a person. Credits to notion"
              width={124}
            />
            <h2 className="mb-4 fw-bold">Hi, I&apos;m Yaseen Sidhik</h2>
            <p className="fs-5 fw-bold my-4">
              I am an aspiring{" "}
              <span className="text-success">Web Developer</span> from <br />
              <span className="location">
                Kochi, India&nbsp;
                <img
                  src="https://flagcdn.com/w320/in.png"
                  alt="Indian Flag"
                  width={30}
                />
              </span>
            </p>
            <div className="col-sm-12 col-md-8 fw-bold fs-5 mt-4">
              I am Passionate about building impactful software solutions
              through continuous learning and application.
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-end gap-3 mt-3 "
          >
            <HeaderCard
              icon={FaLaptopCode}
              text="Experiences"
              link={"#Experience"}
            />
            <HeaderCard
              icon={SiAboutdotme}
              text="About Me"
              link={"#about-me"}
            />
            <HeaderCard
              icon={IoShareSocialSharp}
              text="My Socials"
              link={"#socials"}
            />
            <HeaderCard
              icon={MdOutlineContactSupport}
              text="How To Contact Me ?"
              link={"#contact-me"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
