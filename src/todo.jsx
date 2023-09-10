// export default function Todo({task, isDone}){
//     return (
//         <li>Task: {task}</li>
//     )
// }

// conditional randering option 1:
// export default function Todo({task, isDone}){
//  if(isDone=== true){
//     return <li>Finished: {task}</li>
//  }
//  else{
//     return <li>Work on: {task}</li>
//  }
// }

// conditional rendering 3

// export default function Todo
// ({task, isDone}){
// return (
//    <li>{isDone? 'Finished': 'Work on'} : {task}</li>
// )
// }

// conditional randering 4
// export default function Todo
// ({task, isDone}){
// return (
//    <li>{task} {isDone && ': Done'}</li>
// )
// }


// randering 5
// export default function Todo
// ({task, isDone}){
// // return (
// //    <li>{task} {isDone || ': Do it'}</li>
// // )
// }