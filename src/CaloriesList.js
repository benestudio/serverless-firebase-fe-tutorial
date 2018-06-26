import React, { Component } from 'react'
import List from '@material-ui/core/List';
import LinearProgress from '@material-ui/core/LinearProgress';
import { fstore } from './firebase';
import CaloriesRecord from './CaloriesRecord';

export default class CaloriesList extends Component {
  state = {
    calories: [],
    isFetching: true,
  }

  unsubscribe = () => {};

  componentDidMount = () => {
    this.unsubscribe = fstore.collection('calories').orderBy('calories').onSnapshot((snap) => {
      const calories = snap.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      this.setState({ calories, isFetching: false });
    })
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  render() {
    const { calories, isFetching } = this.state;
    return (
      <div>
        {isFetching && <LinearProgress />}
        <List>
          {!isFetching && calories.map(calory => (
            <CaloriesRecord key={calory.id} {...calory} />
          ))}
        </List>
      </div>
    )
  }
}
