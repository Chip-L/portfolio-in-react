import React from "react";

function Footer() {
  return (
    <footer>
      <ul class="container">
        <li>
          <label for="phone">Phone:</label>
          <a id="phone" href="tel:7202894751">
            720-289-4751
          </a>
        </li>
        <li>
          <label for="email">Email:</label>
          <a id="email" href="#">
            chip_long@yahoo.com
          </a>
        </li>
        <li>
          <label for="github"> Github:</label>
          <a
            id="github"
            href="https://github.com/Chip-L/"
            target="_blank"
            rel="noopener"
          >
            Chip-L
          </a>
        </li>
        <li>
          <label for="linkedIn">Linked In:</label>
          <a
            id="linkedIn"
            href="https://www.linkedin.com/in/chiplong1/"
            target="_blank"
            rel="noopener"
          >
            chiplong1
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
