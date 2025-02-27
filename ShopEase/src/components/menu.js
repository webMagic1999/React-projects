export default function Menu({ children, onHandlePage }) {
  return <li onClick={onHandlePage}>{children}</li>;
}
