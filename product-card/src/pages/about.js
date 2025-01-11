import "../css/about.css";
import TeamSlider from "../components/slider";
import Button from "../components/button";
import Contact from "./contact";

export default function AboutUs(onHandlePage) {
  function handleClick() {
    onHandlePage("home");
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <div className="introduction">
        <p>
          Welcome to ProductCart, your one-stop destination for top-quality
          products at unbeatable prices. We are passionate about bringing you
          the best deals across a wide range of categories.
        </p>
      </div>
      <div className="mission">
        <h4>Mission</h4>
        <p>
          Our mission is to simplify your shopping experience by providing a
          diverse selection of premium products, seamless navigation, and
          exceptional customer service. We aim to deliver happiness to your
          doorstep.
        </p>
      </div>
      <div className="story">
        <h4>Story</h4>
        <p>
          Founded in 2025, Product Cart began as a small passion project to make
          shopping more accessible and enjoyable. Today, we serve thousands of
          happy customers every month.
        </p>
      </div>
      <div className="values">
        <h4>Values</h4>
        <ul>
          <li>
            <p>
              <b>Customer First : </b> Your satisfaction is our top priority.
            </p>
          </li>
          <li>
            <p>
              <b>Quality Guaranteed : </b> We handpick every product to ensure
              top-notch standards.
            </p>
          </li>
          <li>
            <p>
              <b>Sustainability : </b> We believe in eco-friendly and
              responsible sourcing.
            </p>
          </li>
        </ul>
        <Button onClick={handleClick}>Shop now &rarr;</Button>
      </div>
      <div className="product-overview">
        <h4>Product Categories</h4>
        <p>
          Explore our exclusive collections of electronics, fashion, jewelry,
          and more. Whether you're upgrading your gadgets or revamping your
          wardrobe, we've got you covered.
        </p>
      </div>
      <div className="approach">
        <h4>Customer-Cemtric Approach</h4>
        <p>
          Our commitment to you includes fast shipping, secure checkout, and a
          no-hassle return policy. We're here to make your shopping experience
          as seamless as possible
        </p>
      </div>
      <TeamSlider />
      <Contact />
    </div>
  );
}
