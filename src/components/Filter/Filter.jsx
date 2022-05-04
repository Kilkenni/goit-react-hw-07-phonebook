//import debounce from "debounce";
import { useSelector, useDispatch } from "react-redux";

//import propTypes from "prop-types";
import styles from "./Filter.module.css";

import { update, selectFilter } from "redux/contacts/filter";

const Filter = (/*{ value, onChange }*/) => {
  const value = useSelector(selectFilter);

  const dispatch = useDispatch();

  function onFilterChange(event) {
    //todo debounce
    dispatch(update(event.currentTarget.value));

  }

    return (<label>Filter contacts:
              <input
                type="text"
                name="filter"
                onChange={onFilterChange}
                value={value}
                className={styles.inputFilter}
              />
            </label>);
}

Filter.propTypes = {
    //value: propTypes.string,
    //onChange: propTypes.func,
}

export default Filter;