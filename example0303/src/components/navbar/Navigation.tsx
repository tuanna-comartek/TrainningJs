import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BlogPage from "../../pages/blog/BlogPage";
import HomePage from "../../pages/home/HomePage";
import OtherPage1 from "../../pages/otherPage1/OtherPage1";
import OtherPage2 from "../../pages/otherPage2/OtherPage2";
import OtherPage3 from "../../pages/otherPage3/Other3";
import TodoList from "../../pages/TodoList/TodoList";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light my-navbar">
          <div className="container-fluid my-navbar-content">
            <div className="navbar-brand content-left">
              <img
                src="https://comartek.com/wp-content/uploads/2021/07/concept_logo-web.png"
                alt="Comartek"
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse content-right"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav ">
                <div className="nav-link active" aria-current="page">
                  <Link className="item-nav" to="/">
                    Home Page
                  </Link>
                </div>
                <div className="nav-link">
                  <Link className="item-nav" to="/blog">
                    Blog Page
                  </Link>
                </div>
                <div className="nav-link">
                  <Link className="item-nav" to="/other1">
                    Other Page 1
                  </Link>
                </div>
                <div className="nav-link">
                  <Link className="item-nav" to="/other2">
                    Other Page 2
                  </Link>
                </div>
                <div className="nav-link">
                  <Link className="item-nav" to="/other3">
                    Other Page 3
                  </Link>
                </div>
                <div className="nav-link">
                  <Link className="item-nav" to="/other4">
                    To-do List
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="/other1"
            element={
              <OtherPage1
                name="Nguyen Anh Tuan"
                address="Viet Nam"
                phoneNumber={+84869794311}
                email="abc@gmail.com"
              />
            }
          />
          <Route path="/other2" element={<OtherPage2 />} />
          <Route path="/other3" element={<OtherPage3 />} />
          <Route path="/other4" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Navigation;
