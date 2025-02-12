// 1 Variant

// const groupA = [
//     "FC Arsenal London",
//     "FC Real Madrid",
//     "FC Bayern Munich",
//     "FC Milan"
// ]

// function createTeamsForCalendarPage(teams){
//     teams.forEach((item, index) => {
//         const onlyClubName = item.split(" ")[1]
//         teams[index] = onlyClubName
//     });
//     return teams
// }

// const newArr = [...groupA]

// console.log(createTeamsForCalendarPage(newArr))
// console.log(groupA);


// ----------------------------------------------------------------
// 2 Variant


const groupA = [
    "FC Arsenal London",
    "FC Real Madrid",
    "FC Bayern Munich",
    "FC Milan"
]

function createTeamsForCalendarPage(teams){
    return teams.map(items => items.split(' ')[1])
}

console.log(createTeamsForCalendarPage(groupA))
console.log(groupA);