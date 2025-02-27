import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Jane Smith",
    email: "emily.davis@example.com",
    review:
      "React makes it possible to build amazing user interfaces. The virtual DOM provides excellent performance. Its ecosystem offers extensive libraries, and reusable components simplify development. Developers appreciate its declarative nature.",
  },
  {
    id: 2,
    name: "Emily Davis",
    email: "alex.johnson@example.com",
    review:
      "React's component-based architecture allows for efficient code reuse and easier maintenance. Its learning curve is manageable, and the documentation is comprehensive. It's a great choice for both small and large-scale projects.",
  },
  {
    id: 3,
    name: "Chris Brown",
    email: "jane.smith@example.com",
    review:
      "I love how React simplifies state management. The combination of hooks and the context API makes it easy to handle complex state scenarios without over-complicating the code. It's a must-have in any modern front-end developer's toolkit.",
  },
  {
    id: 4,
    name: "Michael Wilson",
    email: "lisa.taylor@example.com",
    review:
      "React's integration with other libraries and frameworks is seamless. Its flexibility in choosing between class components and functional components gives developers the freedom to pick the best tool for the job. The learning community is also very active and helpful.",
  },
  {
    id: 5,
    name: "Lisa Taylor",
    email: "michael.wilson@example.com",
    review:
      "The developer experience with React is smooth and intuitive. The hot-reloading feature speeds up development time significantly. Its testing tools like Jest and React Testing Library make ensuring code quality easier.",
  },
  {
    id: 6,
    name: "David Johnson",
    email: "david.johnson@example.com",
    review:
      "React's performance optimizations, especially with the virtual DOM, make it a top choice for high-performance applications. The community support is vast, making it easier to find resources and solutions to common problems.",
  },
  {
    id: 7,
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    review:
      "I appreciate the simplicity of React's syntax. It allows me to focus more on the logic and functionality of my applications rather than getting bogged down in complex JavaScript code. It's truly a game-changer in front-end development.",
  },
  {
    id: 8,
    name: "John Doe",
    email: "john.doe@example.com",
    review:
      "React's ecosystem has matured greatly over the years. With tools like React Router and Redux, managing application state and navigation has become much more intuitive. It's a must-learn for anyone serious about front-end development.",
  },
  {
    id: 9,
    name: "Sophia Harris",
    email: "sophia.harris@example.com",
    review:
      "The component-based nature of React makes it easy to build modular, maintainable, and reusable code. Its strong typing with TypeScript and extensive ecosystem make it a favorite choice for enterprise applications.",
  },
  {
    id: 10,
    name: "James Rodriguez",
    email: "james.rodriguez@example.com",
    review:
      "React's ability to manage asynchronous code with hooks like useEffect makes it a standout among front-end frameworks. It simplifies complex logic and helps in building responsive user interfaces effortlessly.",
  },
];

export default function App() {
  const [allReviews, setAllReviews] = useState(reviews);
  const [modalOpen, setModalOpen] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  return (
    <div>
      <div>
        <Header
          onModalChange={setModalOpen}
          showAll={showAllReviews}
          onShowAll={setShowAllReviews}
        />
      </div>
      <div className="feedbacks">
        <ReviewList
          reviews={allReviews}
          onShowAllReviews={setShowAllReviews}
          showAll={showAllReviews}
        />
      </div>
      {modalOpen && (
        <Modal
          reviews={allReviews}
          onSetReviews={setAllReviews}
          onModalChange={setModalOpen}
        />
      )}
    </div>
  );
}

function Header({ onModalChange, showAll, onShowAll }) {
  function handleOpenModal() {
    onModalChange(true);
  }

  function handleShowAllReviews() {
    onShowAll((showAll) => !showAll);
  }

  return (
    <div className="header">
      <h1>EchoForm</h1>
      <div className="buttons-header">
        <CustomButton
          bgColor="#ffe4c4"
          bgHover="#121212"
          onClick={handleOpenModal}
        >
          Add a review 🖋️
        </CustomButton>
        <CustomButton
          bgColor="#ffe1a8"
          bgHover="#c9cba3"
          onClick={handleShowAllReviews}
        >
          {showAll ? "Close All Reviews" : "Show All Reviews"}
        </CustomButton>
      </div>
    </div>
  );
}

function ReviewList({ reviews, showAll }) {
  const displayedReviews = showAll ? reviews : reviews.slice(-3);
  return displayedReviews.map((elreview) => (
    <Review
      review={elreview.review}
      name={elreview.name}
      email={elreview.email}
      key={elreview.id}
    />
  ));
}

function Review({ review, name, email }) {
  return (
    <div className="feedback-box">
      <p>{review}</p>
      <h4>{name}</h4>
      <h6>{email}</h6>
    </div>
  );
}

function Modal({ reviews, onSetReviews, onModalChange }) {
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSetReviews(e) {
    e.preventDefault();
    if (!review || !name || !email) return;

    const newReview = {
      id: crypto.randomUUID(),
      review,
      name,
      email,
    };

    onSetReviews(() => [...reviews, newReview].slice(-3));

    setEmail("");
    setReview("");
    setName("");
    onModalChange(false);
  }

  function handleCloseModal() {
    onModalChange(false);
  }
  return (
    <div className="modal">
      <div className="write-review">
        <h2>Write a Feedback</h2>
        <form onSubmit={handleSetReviews}>
          <label>Write Your Review</label>
          <textarea
            cols="50"
            rows="8"
            placeholder="write your review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />

          <label>Enter Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Enter Your Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="buttons">
            <CustomButton bgColor="#edede9" bgHover="#99d98c">
              Submit
            </CustomButton>
          </div>
        </form>
        <div className="buttons">
          <CustomButton
            onClick={handleCloseModal}
            bgHover="#dc2f02"
            bgColor="#edf2f4"
          >
            Close
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

function CustomButton({ children, bgColor, bgHover, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  return (
    <button
      style={
        isHovered
          ? { backgroundColor: bgHover, color: "#fff" }
          : { backgroundColor: bgColor }
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
