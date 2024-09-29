import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul className="footerContainer">
        <li>
          <label htmlFor="phone">Phone:</label>
          <a
            id="phone"
            href="tel:7202894751"
          >
            720-289-4751
          </a>
        </li>
        <li>
          <label htmlFor="github">Github:</label>
          <a
            id="github"
            href="https://github.com/Chip-L/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chip-L
          </a>
        </li>
        <li>
          <label htmlFor="linkedIn">Linked In:</label>
          <a
            id="linkedIn"
            href="https://www.linkedin.com/in/chiplong1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            chiplong1
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
