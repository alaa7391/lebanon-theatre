import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Icon from "./Clock";
import Theatre from "./Theatre";
import "./styles.css";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex",
    color: "red"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card
        style={{
          border: "3px solid red",
          borderRadius: "30px",
          margin: "10px 10px 10px 10px",
          float: "left",
          boxShadow: "25px"
        }}
        className={classes.card}
      >
        <CardHeader
          /*   avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              A
            </Avatar>
          } */
          action={
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          }
          title="Hishik Bishik Show"
          subheader="September 14, 2016 "
          style={{ color: "red" }}
        />
        <IconButton aria-label="Share">
          <Icon width={40} /> <h6> 8:30 pm</h6>
          <Theatre width={40} /> <h6>Metro Al Madina</h6>
        </IconButton>

        <CardMedia
          className={classes.media}
          image="https://www.antoineticketing.com/files/event_thumb_6600.jpg"
          title="Paella dish"
          style={{ backgroundSize: "contain", backgroundColor: "black" }}
        />
        <CardContent>
          <Typography component="p">
            في النصف الأول من القرن الماضي. أربعة لوحات تتضمّن عشرات الأغنيات
            يؤديها تسعة فنانين موزعين بين موسيقيين، مغنين، ممثلين و راقصين
            <CardActions className={classes.actions} disableActionSpacing />
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography span>
                  النصف الأول من القرن الماضي. أربعة لوحات تتضمّن عشرات الأغنيات
                  يؤديها تسعة فنانين موزعين بين موسيقيين، مغنين،.
                </Typography>
              </CardContent>
            </Collapse>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
