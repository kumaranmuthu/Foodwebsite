import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div>
      <HomePage />
      <MenuPage />
      <AboutPage />
      <BookTablePage />
    </div>
  );
}

// Home Page Component
function HomePage() {
  return (
    <div id="sectionHomePage">
      <nav className="menubar">
        <div className="food-logo">
          <p className="food-logo-name">Food</p>
        </div>
        <div className="flex-container">
          <div>
            <a href="#sectionHomePage" className="menuBarName">Home</a>
            <a href="#sectionMenuBar" className="menuBarName">Menu</a>
            <a href="#sectionAboutBar" className="menuBarName">About</a>
            <a href="#sectionBookTable" className="menuBarName">Booktable</a>
          </div>
          <img src="./img/foodlogo.webp" className="food-logo-img" alt="Food Logo" />
        </div>
      </nav>
      <div className="bg-container-food-img">
        <div className="restaurant-home-content">
          <div>
            <h1 className="fast-food-restaurant">Fast Food Restaurant</h1>
            <p className="home-description">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
            </p>
            <button className="order-now">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Menu Page Component
function MenuPage() {
  const menuItems = [
    {
      title: 'Delicious Pizza',
      description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imgSrc: './img/pizaimg.avif',
    },
    {
      title: 'Burger',
      description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imgSrc: './img/fireburger.jpg',
    },
    {
      title: 'Pizza',
      description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imgSrc: './img/pizzaimf1.avif',
    },
    {
      title: 'Burger',
      description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imgSrc: './img/burgerimg.avif',
    },
    {
      title: 'Crunch Fries',
      description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imgSrc: './img/crunchfries1.avif',
    },
    {
      title: 'Crunch Fries',
      description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imgSrc: './img/crunchfries2.jpg',
    },
    {
      title: 'Crunch Fries',
      description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imgSrc: './img/crunchfries3.jpg',
    },
    {
      title: 'Crunch Fries',
      description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
      imgSrc: './img/crunchfries4.jpg',
    },
  ];

  return (
    <div id="sectionMenuBar">
      <div className="menuBar-bg-container">
        <h1 className="our-menu">Our Menu</h1>
        <div className="first-part-img">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-card-container">
              <div className="menuBar-bg-container-card">
                <img src={item.imgSrc} className="pizza-img" alt={item.title} />
              </div>
              <div className="bg-container-description">
                <h1 className="delicious">{item.title}</h1>
                <p className="delicious">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// About Page Component
function AboutPage() {
  return (
    <div id="sectionAboutBar">
      <div className="bg-image-about">
        <div className="about-card-contain">
          <img src="./img/tableabout.avif" className="about-img" alt="About" />
          <div className="about-card-container-description">
            <h1 className="contact-us">We Are Feane</h1>
            <p className="contact-us">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
            <button className="contact-us1">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Book Table Page Component
function BookTablePage() {
  const [formData, setFormData] = useState({
    yourName: '',
    phoneNumber: '',
    yourEmail: '',
    manyPerson: '',
    dataElement: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    setFormData({
      yourName: '',
      phoneNumber: '',
      yourEmail: '',
      manyPerson: '',
      dataElement: '',
    });
  };

  return (
    <div id="sectionBookTable">
      <div className="bookingtable">
        <h1 className="book-a-table">Book a Table</h1>
        <div>
          <input
            type="text"
            className="text-content"
            id="yourName"
            placeholder="Your Name"
            value={formData.yourName}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            className="text-content"
            id="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            className="text-content"
            id="yourEmail"
            placeholder="Your Email"
            value={formData.yourEmail}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            className="text-content"
            id="manyPerson"
            placeholder="How Many Persons?"
            value={formData.manyPerson}
            onChange={handleChange}
          />
          <br />
          <input
            type="date"
            className="text-content"
            id="dataElement"
            value={formData.dataElement}
            onChange={handleChange}
          />
          <br />
          <button className="book-now-button" onClick={handleSubmit}>
            Book Now
          </button>
        </div>
        <div className="contactus">
          <div className="contactus-content">
            <div className="contactus-content-card">
              <h1 className="contact-us">Contact Us</h1>
              <p className="location">Location : Salem</p>
              <p className="call">call +91 8908765423</p>
              <p className="mail">demo@gmail.com</p>
            </div>
            <div className="contactus-content">
              <img src="img/facebook_318-119217.avif" className="social-img" alt="Facebook" />
              <img src="img/instagram-icon_1057-2227.avif" className="social-img" alt="Instagram" />
              <img src="img/twitter_318-103147.avif" className="social-img" alt="Twitter" />
            </div>
            <div className="contactus-content-card">
              <h1 className="contact-us">Opening Hours</h1>
              <p className="location">Every day</p>
              <p className="call">10.00 AM to 10.00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
