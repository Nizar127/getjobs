import { db } from '../config/firebase';
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';

// const applicantRef = firestore().collection("Applicant");

// userID = firebase.auth().currentUser;

// export const addApplicant = () => {
//     applicantRef.add({
//         jobname: jobname,
//         userId: userID,
//         userimage: userimage,
//         userInfo: userInfo,
//         jobtype: jobtype,
//         jobtime: jobtime,
//         jobdate: jobdate,
//         location: location
//     })
// }
// export const addJob = (jobname, jobdesc, worktype, salary, peoplenum, chosenDate, location) => {
//     db.ref('/Job').push({
//         jobname: jobname,
//         jobdesc: jobdesc,
//         worktype: worktype,
//         salary: salary,
//         peoplenum: peoplenum,
//         chosenDate: chosenDate,
//         location: location
//     }, () => this.props.navigation.navigate('UploadSuccess'));
// }

// // export const updateStudent =  (name, matricno, major, year, status) => {
// //     db.ref('/students').child(matricno).update({
// //         name: name,
// //         matricno: matricno,
// //         major: major,
// //         year: year,
// //         status: status
// //     }, () => Actions.HomeScreen());
// // }

// // export const removeStudent =  (matricno) => {
// //     db.ref('/students').child(matricno).remove();
// //     Actions.HomeScreen();
// // }

// import { db, auth, firestore, storage } from '../config/firebase';

// import uuid4 from 'uuid/v4';

// export function login({ email, password }) {
//     auth.signInWithEmailAndPassword(email, password)
//         .then((value) => console.log(value))
// }

// export function signup({ email, password, displayName }) {
//     auth.createUserWithEmailAndPassword(email, password)
//         .then((userInfo) => {
//             console.log(userInfo)
//             userInfo.user.updateProfile({ displayName: displayName.trim() })
//                 .then(() => { })
//         })
// }

// export function subscribeToAuthChanges(authStateChanged) {
//     auth.onAuthStateChanged((user) => {
//         authStateChanged(user);
//     })
// }

// export function signout(onSignedOut) {
//     auth.signOut()
//         .then(() => {
//             onSignedOut();
//         })
// }

// export function updateUserDataProfile(profile, updateComplete) {
//     profile.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
//     console.log("Updating food in firebase");

//     firestore
//         .collection('Profile')
//         .doc(food.id).set(profile)
//         .then(() => updateComplete(profile))
//         .catch((error) => console.log(error));
// }

// export function deleteUserProfileData(profile, deleteComplete) {
//     console.log(food);

//     firestore
//         .collection('Foods')
//         .doc(profile.id).delete()
//         .then(() => deleteComplete())
//         .catch((error) => console.log(error));
// }


// export function uploadFood(food, onFoodUploaded, { updating }) {

//     if (food.imageUri) {
//         const fileExtension = food.imageUri.split('.').pop();
//         console.log("EXT: " + fileExtension);

//         var uuid = uuid4();

//         const fileName = `${uuid}.${fileExtension}`;
//         console.log(fileName);

//         var storageRef = storage.ref(`foods/images/${fileName}`);

//         storageRef.putFile(food.imageUri)
//             .on(
//                 firebase.storage.TaskEvent.STATE_CHANGED,
//                 snapshot => {
//                     console.log("snapshot: " + snapshot.state);
//                     console.log("progress: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100);

//                     if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
//                         console.log("Success");
//                     }
//                 },
//                 error => {
//                     unsubscribe();
//                     console.log("image upload error: " + error.toString());
//                 },
//                 () => {
//                     storageRef.getDownloadURL()
//                         .then((downloadUrl) => {
//                             console.log("File available at: " + downloadUrl);

//                             food.image = downloadUrl;

//                             delete food.imageUri;

//                             if (updating) {
//                                 console.log("Updating....");
//                                 updateFood(food, onFoodUploaded);
//                             } else {
//                                 console.log("adding...");
//                                 addFood(food, onFoodUploaded);
//                             }
//                         })
//                 }
//             )
//     } else {
//         console.log("Skipping image upload");

//         delete food.imageUri;

//         if (updating) {
//             console.log("Updating....");
//             updateFood(food, onFoodUploaded);
//         } else {
//             console.log("adding...");
//             addFood(food, onFoodUploaded);
//         }
//     }
// }

// export async function getJobListed(jobsRetrieved) {

//     var jobList = [];

//     var snapshot = await db.ref('Job')
//         // .collection('Job')
//         // .orderBy('createdAt')
//         // .get()

//     snapshot.forEach((doc) => {
//         const jobItem = doc.data();
//         jobItem.id = doc.id;
//         jobList.push(jobItem);
//     });

//     jobsRetrieved(foodList);
// }


// export function addUserProfile(profile, addComplete) {
//     //profile.createdAt = firebase.firestore.FieldValue.serverTimestamp();

//     firestore
//         .collection('Profile')
//         .add({
//             name: profile.name,
//             personal: profile.personal,
//             createdAt: firebase.firestore.FieldValue.serverTimestamp()
//         })
//         .then((snapshot) => {
//             profile.id = snapshot.id;
//             snapshot.set(profile);
//         }).then(() => addComplete(food))
//         .catch((error) => console.log(error));
// }

// //store applicant data
// //we going to need user's information from authentication firstItem
// //then applicant id would contain user id as well to forward to job maker
// export function addApplicant(profile, applicant, addComplete) {

//   if(subscribeToAuthChanges(user)){
//         let uid = db.ref('/User').child("jobname").push().getKey();
//         uid.once("value").then((snapshot) => {
//         snapshot.forEach((childSnapshot) => {
//           var key = childSnapshot.key;
//           var childData = childSnapshot.val();
//         });
//      });

//     firestore
//     .collection('Applicant')
//     .add({
//         name: applicant.name,
//         id: profile.id,
//         personal: applicant.personal,
//         createdAt: firebase.firestore.FieldValue.serverTimestamp()
//     })
//     .then((snapshot) => {
//         profile.id = snapshot.id;
//         snapshot.set(profile);
//     }).then(() => addComplete(food))
//     .catch((error) => console.log(error));
//  }
//     //profile.createdAt = firebase.firestore.FieldValue.serverTimestamp();


// }

// export function getData(){

// }