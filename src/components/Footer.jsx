import React from "react";

export default function Footer() {
  return (
    <footer class="container-fluid text-center">
      <a href="#home" title="To Top">
        <span class="glyphicon glyphicon-chevron-up"></span>
      </a>
      <p>
      © Copyright {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </footer>
  );
}
