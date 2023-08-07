import Header_Logo from '../assets/Header_Logo.png'

function Header() {
    return (
      <>
      <img src={Header_Logo} alt=''/>
      <ul>
        <a href=''><li>Home</li></a>
        <a href=''><li>About</li></a>
        <a href=''><li>Menu</li></a>
        <a href=''><li>Reservations</li></a>
        <a href=''><li>Order Online</li></a>
        <a href=''><li>Login</li></a>
      </ul>
  </>
    );
  }

  export default Header;