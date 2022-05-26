import style from "../styles/Characters.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>About</li>
            <li>Characters</li>
          </ul>
        </nav>
      </header>
      <div className={style.container}>{children}</div>
    </div>
  );
};

export default Layout;
