import './Navbar.css';

export default function Navbar({ children }) {
  return (
    <nav className='navbar'>{children}</nav>
  );
}
