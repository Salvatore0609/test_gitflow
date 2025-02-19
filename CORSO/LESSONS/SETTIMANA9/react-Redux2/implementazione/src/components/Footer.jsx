import { useSelector } from "react-redux";

const Footer = () => {
  const books = useSelector((state) => state.books.content);
  return (
    <footer className="epizon-footer">
      <span className="text-muted">Epizon {new Date().getFullYear()}©</span>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
