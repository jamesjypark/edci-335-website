import React from "react";

import "./ProjectCard.scss";

class ProjectCard extends React.Component {
  render() {
    const { title, duration, technology, summary, image } = this.props;
    return (
      <div className="ProjectCard">
        <div className="image-container">
          <img src={image} />
        </div>
        <div className="text">
          <div className="subheader2 left">{title}</div>
          <div className="basetext3 book left">{duration}</div>
          <div className="basetext3 book left">{technology}</div>
          <div className="summary hide-in-mobile">
            {summary.map(text => (
              <div className="basetext3 book left">{text}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
