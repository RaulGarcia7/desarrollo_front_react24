import PropTypes from "prop-types"

function Select({value, items, onChange}) {
    return(
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
    );
}

Select.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    items: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func
}

export default Select