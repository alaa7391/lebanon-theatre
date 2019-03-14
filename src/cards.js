import Flippy, { FrontSide, BackSide } from "react-flippy";
import React from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
export class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="card-container">
          ;
          <div className="sp-borders">
            {" "}
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "100%", height: "100%" }} /// these are optional style, it is not necessary
            >
              <div style={{ width: "100%", height: "100%" }}>
                <FrontSide
                  className="batata"
                  style={{
                    backgroundColor: "#trb22"
                  }}
                >
                  <div className="image-container">
                    <img
                      className="event-image"
                      src="https://www.antoineticketing.com/files/event_thumb_6600.jpg"
                    />

                    <div className="event">
                      <time datetime="2014-09-20" class="icon">
                        <em>Saturday</em>
                        <strong>September</strong>
                        <span>20</span>
                      </time>
                      <span className="title">HISHIK BISHIK SHOW</span>
                      <span className="location">Metro Madina</span>
                    </div>
                  </div>
                </FrontSide>
              </div>

              <BackSide
                style={{
                  backgroundColor: "#ffffcc",
                  borderRadius: "30px"
                }}
              >
                <div className="description">
                  <p>
                    في النصف الأول من القرن الماضي. أربعة لوحات تتضمّن عشرات
                    الأغنيات يؤديها تسعة فنانين موزعين بين موسيقيين، مغنين،
                    ممثلين و راقصين يأخذوننا إلى تلك الحقبة من الزمن الجميل. في
                    النصف الأول من القرن الماضي. أربعة لوحات تتضمّن عشرات
                    الأغنيات يؤديها تسعة فنانين موزعين بين موسيقيين، مغنين،
                    ممثلين و راقصين يأخذوننا إلى تلك الحقبة من الزمن الجميل. في
                    النصف الأول من القرن الماضي. أربعة لوحات تتضمّن عشرات
                    الأغنيات يؤديها تسعة فنانين موزعين بين موسيقيين، مغنين،
                    ممثلين و راقصين يأخذوننا إلى تلك الحقبة من الزمن الجميل.
                  </p>
                  <span>
                    <button className="btn">|^|</button>
                    <button className="btn">More</button>
                  </span>
                  <span />
                </div>
              </BackSide>
            </Flippy>
          </div>
        </div>
        <div>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default Card;
