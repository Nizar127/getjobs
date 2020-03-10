import { db } from '../config/firebase';

export const addJob =  (jobname, jobdesc, worktype, salary, peoplenum, chosenDate, location) => {
    db.ref('/Agenda').child(salary).set({
        jobname: jobname,
        jobdesc: jobdesc,
        worktype: worktype,
        salary: salary,
        peoplenum: peoplenum,
        chosenDate: chosenDate,
        location: location 
    }, () => this.props.navigation.navigate('myorder'));
}

export const addBlog =  (blogname, blogdesc) => {
    db.ref('/Blog').child(salary).set({
        blogname: blogname,
        blogdesc: blogdesc,
    }, () => this.props.navigation.navigate('blogposted'));
}
// export const updateStudent =  (name, matricno, major, year, status) => {
//     db.ref('/students').child(matricno).update({
//         name: name,
//         matricno: matricno,
//         major: major,
//         year: year,
//         status: status
//     }, () => Actions.HomeScreen());
// }

// export const removeStudent =  (matricno) => {
//     db.ref('/students').child(matricno).remove();
//     Actions.HomeScreen();
// }