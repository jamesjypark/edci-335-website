import React from "react";

import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="basetext2">
          Got any questions? Submit your question {" "}
          <a href="https://github.com/jamesjypark/edci-335-website/issues/new?assignees=josefwaller%2C+jamesjypark&labels=question&template=learning-resource-question.md&title=%5BQuestion%5D" className="link" target="_blank">here!</a>
        </div>
        
        <div>Made with ❤️ by Josef Waller and James Park</div>
      </div>
    );
  }
}

export default Footer;
