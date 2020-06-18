import React, { Component } from 'react';
import {Flatlist} from 'react-native';
import { Text, ListItem, Left, Right, Icon } from 'native-base';
import PropTypes from 'prop-types';
import { Divider } from 'react-native-elements';

export default class JobList extends Component {

  static propTypes = {
      jobs: PropTypes.array.isRequired
  };

  // constructor() {
  //   super();
  //   this.state = {
  //     jobs: []
  //   }
  // }

  render() {
    return (
      this.props.jobs.map((data, index) => {
        return (
          <Flatlist
          data={this.props.jobs}
          ItemSeparatorComponent={() => <Divider style={{backgroundColor: 'black'}}/>}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({data, index}) => {
              return(

                <ListItem key={index}>
                <Left>
                  <Text>{data.jobname}</Text>
                </Left>
              <Right>
                <Icon name="arrow-forward" onLongPress={(jobname) => { this.deleteConfirmation(jobname) }} onPress={() => this.onPress(data.jobname, data.uniqueId, data.jobdesc, data.worktype, data.salary, data.peoplenum, data.chosenDate, data.location)} />
              </Right>
               </ListItem>
              );

          }
        
        }
          />


        )
      })
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 32,
    marginBottom: 16
  },
  emptySubtitle: {
    fontSize: 18,
    fontStyle: 'italic'
  }
});