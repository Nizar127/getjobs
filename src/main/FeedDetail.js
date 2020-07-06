import React, { Component } from 'react';
import { StyleSheet, ScrollView, Dimensions, Image, FlatList } from 'react-native';
import {
    Container,
    Header,
    Content,
    View,
    Card,
    Right,
    auto,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    List,
    ListItem,
    Separator,
    Button
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get("window");


export default class FeedDetail extends Component {
    constructor() {
        super();
        this.state = {
            jobs: [],
            jobCreatorName,
            jobname: null,
            jobdesc: null,
            salary: null,
            peoplenum: null,
            time: null,
            worktype: null,
            location: { description: '' },
            url: null,
            lat: 0,
            lng: 0,

        }
    }

    componentDidMount() {
        const FeedDetailRef = firestore().collection('Job_list').doc(this.props.navigation.state.params.userkey);
        FeedDetailRef.get().then((res) => {
            if (res.exists) {
                const apply = res.data();
                this.setState({
                    key: res.id,
                    jobCreatorName: apply.jobCreatorName,
                    jobname: apply.jobname,
                    jobdesc: apply.jobdesc,
                    salary: apply.salary,
                    peoplenum: apply.peoplenum,
                    chosenDate: apply.time,
                    worktype: apply.worktype,
                    location: apply.location,
                    url: apply.url,
                    lat: apply.lat,
                    lng: apply.lng
                });
                console.log("state", this.state)

            } else {
                console.log("Whoops! Document does not exists");
            }
        });
        this.requestLocationPermission();

    }

    requestLocationPermission = async () => {
        if (Platform.OS === 'ios') {
            var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            console.log('iPhone: ' + response);

            if (response === 'granted') {
                this.locateCurrentPosition();
            }
        } else {
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            console.log('Android: ' + response);

            if (response === 'granted') {
                this.locateCurrentPosition();
            }
        }
    }

    locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(JSON.stringify(position));

                let initialPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.035
                }

                this.setState({ ...this.state, initialPosition });
                console.log("state", state)

            },

            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
        )
    }
    componentWillUnmount() {
        Geolocation.clearWatch(this.watchID);
    }

    render() {
        return (

            <Container>
                <Header>
                    <View style={{ marginTop: 25, marginEnd: 350 }}>
                        <Icon style={{ color: 'white' }} name="md-menu" onPress={() => this.props.navigation.openDrawer()} />
                    </View>
                </Header>

                <Content padder>
                    <Card style={{ height: 300 }}>
                        <Image source={{ uri: this.state.url }} style={{ height: 300 }} />
                    </Card>

                    <Card>
                        <CardItem bordered header>
                            <Text style={{ textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20 }} >{this.state.jobname}</Text>

                        </CardItem>
                        <CardItem bordered>

                            <Text style={{ height: 30, fontWeight: "bold", marginTop: 20, marginBottom: 20 }}>{this.state.uniqueId}</Text>

                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem bordered header>

                            <Text style={{ justifyContent: "center", fontWeight: "bold" }}>Job Description</Text>

                        </CardItem>
                        <CardItem bordered cardBody>
                            <Body style={{ flex: 1, justifyContent: 'center', height: 250, marginLeft: 20 }}>
                                <Text>{this.state.jobdesc}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    {/* <CardItem>   
                         <Text style={{marginTop: 5, marginBottom: 5}}>Creative World Industries</Text>
                    </CardItem> */}



                    <Card style={{ height: 200 }}>
                        <CardItem header bordered>
                            <Text style={{ fontWeight: "bold" }}>Requirement</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Body>
                                <Text style={{ marginLeft: 30, marginTop: 25 }}>{this.state.worktype}</Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody style={{ marginTop: 20 }}>
                            <Body>
                                <Text>Number of People Required: {this.state.peoplenum}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ height: auto }}>
                        <CardItem header bordered>
                            <Text style={{ fontWeight: "bold" }}>Salary</Text>
                        </CardItem>
                        <CardItem cardBody style={{ height: 40, marginTop: 10, marginLeft: 20 }}>
                            <Body><Text>RM {this.state.salary}</Text></Body>
                        </CardItem>
                    </Card>
                    <Card style={{ height: 200 }}>
                        <CardItem header bordered>
                            <Text style={{ fontWeight: "bold" }}>Date</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Body>
                                <Text>{this.state.chosenDate}</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card style={{ height: 500 }}>
                        <CardItem header bordered>
                            <Text style={{ fontWeight: "bold" }}>LOCATION</Text>
                        </CardItem>
                        <CardItem header >
                            <Text style={{ fontWeight: "bold" }}>{this.state.location.description}</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Container style={styles.container}>

                                <MapView
                                    provider={PROVIDER_GOOGLE}
                                    initialRegion={{
                                        latitude: this.state.lat,
                                        longitude: this.state.lng,
                                        latitudeDelta: 0,
                                        longitudeDelta: 0

                                    }}
                                    // onRegionChange={this.onRegionChange.bind(this)}
                                    // ref={map => this._map = map}
                                    showsUserLocation={true}
                                    liteMode={true}
                                    style={styles.map}
                                    moveOnMarkerPress={false}
                                    userLocationPriority="low"
                                    followsUserLocation={true}
                                    showsMyLocationButton={true}

                                >

                                    <Marker
                                        coordinate={{ latitude: this.state.lat, longitude: this.state.lng }}
                                    >

                                    </Marker>
                                    {/* {this.state.dynamicAddress.map(marker => (
                        <Marker
                          key={marker.key}
                          coordinate={marker.address}
                          identifier={"Marker" + marker.key}
                        />
                      ))} */}


                                </MapView>
                            </Container>
                        </CardItem>
                    </Card>

                    <Card style={{ width: width, height: 60, padding: 10, justifyContent: 'center', borderColor: 'grey' }}>
                        <CardItem>
                            <Left>
                                <Text>RM {this.state.salary}</Text><Text>/</Text><Text>day</Text>
                            </Left>
                            <Right>
                                <Button danger style={{ borderRadius: 12 }}><Text>Apply</Text></Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>

            </Container>
            // <Container>
            //     <Content padder>


            //     </Content>

            //     <ScrollView>
            //         <Card >
            //             <CardItem cardBody>
            //                 <Image source={{ uri: this.state.url }} style={{ height: 200, width: null, flex: 1 }} />

            //             </CardItem>
            //             <CardItem>
            //                 <Body>
            //                     <Text>{this.state.jobCreatorName}</Text>
            //                 </Body>
            //             </CardItem>

            //         </Card>

            //         <Card style={{ height: 200 }}>
            //             <CardItem bordered header>

            //                 <Text style={{ justifyContent: "center", fontWeight: "bold" }}>Job Description</Text>

            //             </CardItem>
            //             <CardItem bordered cardBody>
            //                 <Body>
            //                     <Text>{this.state.jobdesc}</Text>
            //                 </Body>
            //             </CardItem>
            //         </Card>
            //         <Card style={{ height: 200 }}>
            //             <CardItem header bordered>
            //                 <Text style={{ fontWeight: "bold" }}>Requirement</Text>
            //             </CardItem>
            //             <CardItem cardBody>
            //                 <Body>
            //                     <Text style={{ marginLeft: 30, marginTop: 25 }}>{this.state.worktype}</Text>
            //                 </Body>
            //             </CardItem>
            //             <CardItem cardBody style={{ marginTop: 20 }}>
            //                 <Body>
            //                     <Text>Number of People Required: {this.state.peoplenum}</Text>
            //                 </Body>
            //             </CardItem>
            //         </Card>


            //         <Card style={{ height: auto }}>
            //             <CardItem header bordered>
            //                 <Text>Notable Project</Text>
            //             </CardItem>
            //             <CardItem cardBody>
            //                 <Content>
            //                     <Separator>
            //                         <Text>Government</Text>
            //                     </Separator>
            //                     <ListItem>
            //                         <Text>JKR</Text>
            //                     </ListItem>
            //                     <ListItem>
            //                         <Text>Jabtan Hasil</Text>
            //                     </ListItem>
            //                     <ListItem>
            //                         <Text>SPAD</Text>
            //                     </ListItem>
            //                     <ListItem>
            //                         <Text>HASIL</Text>
            //                     </ListItem>
            //                     <Separator bordered>
            //                         <Text>SME</Text>
            //                     </Separator>
            //                     <ListItem>
            //                         <Text>Kinematics Business Management Firm</Text>
            //                     </ListItem>
            //                     <ListItem>
            //                         <Text>Derren Consulting Firm</Text>
            //                     </ListItem>
            //                     <ListItem>
            //                         <Text>GoRide</Text>
            //                     </ListItem>
            //                 </Content>
            //             </CardItem>
            //         </Card>
            //         <Card style={{ height: 250 }}>
            //             <CardItem header bordered>
            //                 <Text>Key Player</Text>
            //             </CardItem>
            //             <ScrollView horizontal={true}>
            //                 <CardItem cardBody style={{ flex: 1, flexDirection: 'row', padding: 10, margin: 5, alignContent: 'space-around', justifyContent: 'space-between', alignItems: 'center', marginLeft: 5 }}>
            //                     <Thumbnail large source={require('../../img/dude.jpg')} style={{ padding: 10 }} />
            //                     <Thumbnail large source={require('../../img/dude.jpg')} style={{ padding: 10 }} />
            //                     <Thumbnail large source={require('../../img/dude.jpg')} style={{ padding: 10 }} />
            //                     <Thumbnail large source={require('../../img/dude.jpg')} style={{ padding: 10 }} />
            //                     <Thumbnail large source={require('../../img/dude.jpg')} style={{ padding: 10 }} />


            //                 </CardItem>
            //             </ScrollView>

            //         </Card>

            //     </ScrollView>
            //     <Card style={{ width: width, height: 60, padding: 10, justifyContent: 'center', borderColor: 'grey' }}>
            //         <CardItem>
            //             <Left>
            //                 <Text>RM {this.state.salary}</Text><Text>/</Text><Text>day</Text>
            //             </Left>
            //             <Right>
            //                 <Button danger style={{ borderRadius: 12 }}><Text>Apply</Text></Button>
            //             </Right>
            //         </CardItem>
            //     </Card>


            // </Container>




        );
    }
}


