import React, { Component } from 'react';
import { Text, ListItem, Left, Right, Icon } from 'native-base';
import PropTypes from 'prop-types';

export default class JobList extends Component {

  static propTypes = {
      jobs: PropTypes.array.isRequired
  };

//    onPress = (matricno) => {
//     this.props.onPress(matricno);
//   }

//   onLongPress = (matricno) => {
//     this.props.onLongPress(matricno);
//   }

  render() {
    return(
      this.props.jobs.map((data, index) => {
        return(
          <ListItem key={index}>
          <Left>
          <Text>{data.jobname}</Text>
          </Left>
          <Right>
          <Icon name="arrow-forward" />
          </Right>
          </ListItem>
        )
      })
    )
  }
}