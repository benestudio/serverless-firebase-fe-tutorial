import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { addCalories } from './api';

const styles = (theme) => ({
  textField: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
})

class AddCalories extends Component {
  state = {
    food: '',
    calories: 1,
    isFetching: false,
  };

  handleChangeFood = evt => this.setState({ food: evt.target.value });
  handleChangeCal = evt => this.setState({ calories: evt.target.value });
  handleSubmit = (evt) => {
    evt.preventDefault();

    const { food, calories } = this.state;
    if (!food.length) {
      return;
    }

    this.setState({ isFetching: true });
    addCalories(food, calories)
      .then(() => {
        this.setState({
          food: '',
          calories: 1,
          isFetching: false,
        });
      })
      .catch(e => {
        console.error(e);
      })
  }

  render() {
    const { food, calories, isFetching } = this.state;
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            className={classes.textField} 
            id="food"
            label="Food"
            value={food}
            onChange={this.handleChangeFood}
            fullWidth
          />
        </div>
        <div>
          <TextField
            className={classes.textField} 
            id="calories"
            label="Calories"
            type="number"
            min="1"
            max="5000" 
            value={calories}
            onChange={this.handleChangeCal}
            fullWidth
          />
        </div>
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={isFetching}
            type="submit"
          >
            Send My Food
          </Button>
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(AddCalories);
