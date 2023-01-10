import PropTypes from "prop-types";
// import AppliedCheckbox from './Buttons'
// import CompanyCheckbox from './Buttons'
// import TitleCheckbox from './Buttons'
// import LocationCheckbox from './Buttons'
// import LinkCheckbox from './Buttons'
// import DeadlineCheckbox from './Buttons'

const Header = ({ title }) => {
  return (
    <header
      className="header"
      style={{ backgroundColor: "#1E5128", height: "128px" }}
    >
      <h1 style={{ margin: "auto", fontSize: "64px", color: "#D7E9A8" }}>
        {title}
      </h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Job Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
