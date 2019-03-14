import React from "react";
import ItemsCarousel from "react-items-carousel";
import range from "lodash/range";
import "./styles.css";
export class Carousel extends React.Component {
  componentWillMount() {
    this.setState({
      children: [
        "http://pngimg.com/uploads/tablet/tablet_PNG8592.png",
        "https://www.antoineticketing.com/files/event_thumb_38.jpg",
        "https://www.antoineticketing.com/files/event_thumb_6354.jpg",
        "https://www.antoineticketing.com/files/event_thumb_6600.jpg",
        "https://www.antoineticketing.com/files/event_thumb_6913.jpg",
        "https://www.antoineticketing.com/files/event_thumb_6881.jpg",
        "https://www.antoineticketing.com/files/event_thumb_6974.jpg",
        "https://www.antoineticketing.com/files/event_thumb_6600.jpg",
        "https://www.antoineticketing.com/files/event_thumb_6913.jpg",
        "https://www.antoineticketing.com/files/event_thumb_6881.jpg",
        "https://www.antoineticketing.com/files/event_thumb_6974.jpg"
      ],
      activeItemIndex: 0
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(n)
      });
    }, 100);
  }

  createChildren = n =>
    range(n).map(i => (
      <div key={i} style={{ height: "100%", background: "#333" }}>
        {i}
      </div>
    ));

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  renderItems = () =>
    this.state.children.map(x => (
      <img
        src={x}
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "300px",
          maxWidth: "300px",
          display: "inline-block",
          /*           border: "1px solid green",
           */ borderRadius: "20px"
        }}
      />
    ));

  render() {
    const { activeItemIndex, children } = this.state;

    return (
      <div className="carousel-container">
        <ItemsCarousel // Placeholder configurations
          /*           className="slide"
           */ enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={
            <div style={{ height: "100%", background: "#900" }}>
              Placeholder
            </div>
          }
          // Carousel configurations
          numberOfCards={5}
          gutter={2}
          showSlither={true}
          firstAndLastGutter={false}
          freeScrolling={false}
          // Active item configurations
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={"center"}
          chevronWidth={24}
          rightChevron={">"}
          leftChevron={"<"}
          outsideChevron={false}
        >
          {this.renderItems()}
        </ItemsCarousel>
      </div>
    );
  }
}
