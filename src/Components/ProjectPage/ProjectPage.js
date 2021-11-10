import React from "react";
import Interactive from "../Interactive/Interactive"
import Quiz from "../Quiz/Quiz";
import { NavLink } from "react-router-dom";
import { CopyBlock, dracula } from "react-code-blocks";

import "./ProjectPage.scss";

class ProjectPage extends React.Component {
  renderPage = page => {
    return page.map(item => {
      switch (item.type) {
        case "title":
          return (
            <div className="title-container">
              <div className="subheader1 fade-in">{item.text}</div>
            </div>
          );
        case "duration":
          return (
            <div className="margin-container">
              <div className="basetext2 bold">{item.text}</div>
            </div>
          );
        case "technology":
          return (
            <div className="margin-container">
              <div className="basetext2 medium technology">{item.text}</div>
            </div>
          );
        case "list":
          return (
            <div className="paragraph-container left">
              {item.list.map(item => (
                <div className="basetext2 medium">{item}</div>
              ))}
            </div>
          );
        case "subheader":
          return (
            <div className="margin-container left">
              <div className="subheader2">{item.text}</div>
            </div>
          );
        case "subheader2":
          return (
            <div className="margin-container left">
              <div className="subheader2">{item.text}</div>
            </div>
          );
        case "paragraph":
          return (
            <div className="paragraph-container">
              <div className="basetext2 medium">{item.text}</div>
            </div>
          );
        case "paragraph-link":
          return <div className="paragraph-container">{item.text}</div>;
        case "image":
          return <img src={item.address} />;
        case "image-caption":
          return (
          <div>
            <img src={item.address} />
            <div>{item.caption}</div>
          </div>
        );
        case "video":
          return (
            <iframe
              className="video"
              src={item.url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          );
        case "next-button":
          return (
            <div className="subheader2">
              <NavLink exact to={item.link} className="link" activeClassName="active">
                Next Lesson: {item.title}
              </NavLink>
            </div>
          )
        case "code":
          return (
            <div className="code-block">
              <CopyBlock
                language="c"
                text={item.code}
                codeBlock
                theme={dracula}
                showLineNumbers={true}
              />
            </div>
          )
        case "interactive":
          return <Interactive 
            languages = {item.languages}
          />
        case "quiz":
          return <Quiz questions={item.questions} />
      }
    });
  };
  render() {
    const { page } = this.props;
    return <div className="ProjectPage">{this.renderPage(page)}</div>;
  }
}

export default ProjectPage;
