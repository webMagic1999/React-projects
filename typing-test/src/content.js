export default function Content({ paragraph, word, charIndex }) {
  return (
    <div className="display-para">
      {paragraph.split("").map((char, index) => (
        <span
          key={index}
          className={`char 
          ${index === charIndex ? "active" : ""} 
          ${
            word[index] === char
              ? "correct"
              : index < charIndex
              ? "incorrect"
              : ""
          }`}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
