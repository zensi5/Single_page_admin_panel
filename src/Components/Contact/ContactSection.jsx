import { Button, Pagination } from "antd";
import { React } from "react";
import { ReactComponent as Adduser } from "../../assets/svgs/Adduser.svg";
import { ReactComponent as Forwards } from "../../assets/svgs/Forwards.svg";
import { ReactComponent as Grid } from "../../assets/svgs/Grid.svg";
import { ReactComponent as Previous } from "../../assets/svgs/Previous.svg";
import { ReactComponent as Thumbnail } from "../../assets/svgs/Thumbnail.svg";
import SearchBar from "../SearchBar/SearchBar";
import Cards from "./Cards/Cards";
import "./ContactSection.scss";

const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return (
      <a>
        <Previous />
      </a>
    );
  }
  if (type === "next") {
    return (
      <a>
        <Forwards />
      </a>
    );
  }
  return originalElement;
};

function ContactSection() {
  return (
    <>
      <div className="contactSection">
        <div className="topLeft">
          <div className="titleWrapper">
            <h2 className="title">Contacts</h2>
            <p className="subTitle">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="topRight">
          <SearchBar className="search" />
          <div className="view-btn">
            <Button icon={<Grid />} className="button" />
            <Button
              icon={<Thumbnail width={24} height={24} />}
              className="button buttongrid"
            />
          </div>
          <Button icon={<Adduser />} className="ctabtn">
            New Contact
          </Button>
        </div>
      </div>
      <Cards />

      {/* <div className="paginationSection">
        <h3>
          Showing <span className="paginationNumber">1-10 </span>
          from <span className="paginationNumber">46 </span> data
        </h3>

        <div className="pagination">
          <button
            className="btn"
            onClick={handlePrevious}
            disabled={activePage === 1}
          >
            <Previous />
          </button>
          <div className="pageContainer">
            {[1, 2, 3, 4].map((pageNumber) => (
              <a
                key={pageNumber}
                className={`page ${activePage === pageNumber ? "active" : ""}`}
                onClick={() => handleClick(pageNumber)}
              >
                {pageNumber}
              </a>
            ))}
          </div>
          <button
            className="btn"
            onClick={handleNext}
            disabled={activePage === 4}
          >
            <Forwards />
          </button>
        </div>
      </div> */}

      <div className="paginationSection">
        <h3>
          Showing <span className="paginationNumber">1-10 </span>
          from <span className="paginationNumber">46 </span> data
        </h3>

        <Pagination defaultCurrent={1} total={40} itemRender={itemRender} />
      </div>
    </>
  );
}

export default ContactSection;
