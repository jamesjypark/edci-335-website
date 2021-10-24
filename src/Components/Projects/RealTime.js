export default {
  title: "Real-time Collaboration",
  duration: "2019 Summer",
  technology: "WebSocket, Node with Express, SQLite 3, WebViewer",
  summary: [
    "Internship Project at PDFTron Systems",
    "PDFTron Open-source Project"
  ],
  page: [
    {
      type: "title",
      text: "Real-time Collaboration — Instant Collaborative Document Editing"
    },
    {
      type: "duration",
      text: "2019 Summer"
    },
    {
      type: "technology",
      text: "WebSocket, Node with Express, SQLite 3, WebViewer"
    },
    {
      type: "image",
      address: require("../../assets/realtime2.gif")
    },
    {
      type: "paragraph",
      text:
        "Real-time collaboration is a feature that allows multiple users to simultaneously edit PDF documents in real time. As my final project during my first co-op term at PDFTron Systems, I implemented real-time collaboration feature on WebViewer using a SQLite3 database running on Node server connected to WebSocket."
    },
    {
      type: "subheader",
      text: "Project Overview"
    },
    {
      type: "paragraph",
      text:
        "Since Web 2.0 movement in the mid 2000s, the paradigm of web-based document editing software have been shifting towards real-time collaboration solutions — most notably Writely, now known as Google Drive. The introduction of WebSocket, a bi-directional channel between client and a server in native web environment, eliminated the need for traditional long polling and allowed a simple and reliable implementation of real-time collaboration."
    },
    {
      type: "paragraph",
      text:
        "The biggest challenge of designing a real-time collaboration system is how the data will be stored and updated simultaneously throughout all users. After much discussion with senior software engineers at PDFTron, I decided to use XFDF (XML Forms Data Format) to store annotations in an SQL database. XFDF allows PDF annotations to be stored as an XML-like string, making complex annotation features easily retrievable."
    },
    {
      type: "image",
      address: require("../../assets/realtime3.png")
    },
    {
      type: "paragraph",
      text:
        "Even after the decision to store annotation as XFDF was made, the question of how the different clients will communicate with the server remained. My initial implementation was to use WebSocket as an event listener for each client, alerting the client to fetch new data in real-time. However, this implementation soon became problematic because the client was fetching the entire database in order to update the latest annotation change and unnecessary network requests are being made for each annotation change."
    },
    {
      type: "paragraph",
      text:
        "As an alternate implementation, I made the WebSocket server as the central node that directly broadcasts annotation change to other clients and an SQL database. By implementing the WebSocket to directly transfer data to clients, the number of queries made to the SQL database dramatically decreased."
    },
    {
      type: "italics",
      text:
        "Real-time collaboration has been included as part of PDFTron’s open-source reference projects as of May 2019. You can view it here(github)"
    }
  ]
};
