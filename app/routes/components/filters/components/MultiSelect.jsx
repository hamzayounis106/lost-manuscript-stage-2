import PropTypes from "prop-types";

const MultiSelector = ({ title, options }) => (
  <div>
    <h3 className="font-medium text-lg mb-2 mt-4">{title}</h3>
    <div className="space-y-2">
      {options.map((item) => (
        <label key={item} className="block">
          <input type="checkbox" value={item} className="mr-2" />
          {item}
        </label>
      ))}
    </div>
  </div>
);
MultiSelector.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MultiSelector;
