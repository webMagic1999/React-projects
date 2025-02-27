import { useState } from "react";
import "../css/contact.css";

export default function Contact() {
  const [isClicked, setIsClicked] = useState(false);
  function handleContactClick() {
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <>
      <div
        onClick={handleContactClick}
        className={`contact-info ${isClicked ? "active" : ""}`}
      >
        {isClicked ? (
          <>
            <p>
              <a href="https://www.linkedin.com/in/gourav-mishra-622657255/">
                Connect on LinkdIn
              </a>
            </p>
            <p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mgourav1999@gmail.com&su=ProductCart Order&body=Your+Message+Here"
                target="_blank"
                rel="noreferrer"
              >
                Open Gmail
              </a>
            </p>
            <p>
              <a href="mailto:recipient@example.com">Open Default Email App</a>
            </p>
            <p>
              <a href="tel:7011316790">Call Me : 7011316790</a>
            </p>{" "}
          </>
        ) : (
          <h5>Contact</h5>
        )}
      </div>
    </>
  );
}
