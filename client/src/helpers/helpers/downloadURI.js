// Download an image with an url
export const downloadURI = ({ imageUrl, name }) => {
  var link = document.createElement("a"); // Create a link
  link.download = name; // Name of the download
  link.href = imageUrl; //
  document.body.appendChild(link); // Join the link
  link.click(); // Click the link
  document.body.removeChild(link); // Cleanup
};
