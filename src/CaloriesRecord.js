import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const CaloriesRecord = ({ food, calories }) => (
  <ListItem>
    <ListItemText primary={food} secondary={calories} />
  </ListItem>
)

CaloriesRecord.propTypes = {
  food: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
};

CaloriesRecord.defaultProps = {
  calories: 0,
  food: '',
}

export default CaloriesRecord;
