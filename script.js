document.addEventListener("DOMContentLoaded", function() {
  const downloadButton = document.getElementById("downloadButton");

  downloadButton.addEventListener("click", function() {
      const cvPath = "Bab 1 dan 2 fix.pdf";

      const link = document.createElement("a");
      link.href = cvPath;
      link.download = "Octavia_cv";
      

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
});