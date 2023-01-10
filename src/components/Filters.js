import PropTypes from 'prop-types';
import './Filters.css';
// Title for Filters
const FilterHeader = ({ filter_title }) => {
  return (
    <header>
      <h1
        className="filter_title"
        style={{
          fontSize: "28px",
          width: "111px",
          height: "39px",
          backgroundColor: "#C8D3B0",
          border: "1px solid #00000",
          borderRadius: "10px",
          textAlign: "center",
          marginLeft: "23px",
        }}
      >
        {filter_title}
      </h1>
    </header>
  );
};

// FilterHeader name text
FilterHeader.defaultProps ={
    filter_title: 'Filter',
}
// FilterHeader must be a string
FilterHeader.propTypes={
    filter_title: PropTypes.string.isRequired,
}

// List of filters with checkboxes 
const Checkboxes =() => {
  const checkbox1 = document.getElementById("AppliedCheckbox");
  const checkbox4 = document.getElementById("LocationClick");
  const checkbox6 = document.getElementById("DeadlineClick");

  const appliedClick = () => {
    if (checkbox1) {
      if (checkbox1.checked) {
        console.log("Applied Checkbox checked");
      } else {
        console.log("Applied Checkbox unchecked");
      }
    }
  };

  const locationClick = () => {
    if (checkbox4) {
      if (checkbox4.checked) {
        console.log("Location Checkbox checked");
      } else {
        console.log("Location Checkbox unchecked");
      }
    }
  };

  const deadlineClick = () => {
    if (checkbox6) {
      if (checkbox6.checked) {
        console.log("Dealine Checkbox checked");
      } else {
        console.log("Deadline Checkbox unchecked");
      }
    }
  };

  return (
    <ul>
      <li><input type="checkbox" id="AppliedCheckbox" onClick={appliedClick}></input> Applied</li>
      <li><input type="checkbox" id="LocationClick" onClick={locationClick}></input> Location</li>
      <li><input type="checkbox" id="DeadlineClick" onClick={deadlineClick}></input> Deadline</li>
    </ul>
  );
    }

export  {FilterHeader, Checkboxes};