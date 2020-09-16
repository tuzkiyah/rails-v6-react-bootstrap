import React from 'react';
import PendingItems from './PendingItem';

const Pending = ({ pending }) => {
  const handleSubmit = (body) => {
    const url = "/todos/update";
    const token = document.querySelector('meta[name="csrf-token"]').content;
    
    fetch(url, {
      method: "PUT",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {
        console.log(response);
        // window.location.reload(false);
        return false;
      })
      .catch(() => console.log('An error occurred while adding the todo item'));
  }
  return (
    <div>
      <h4>Pending</h4>
      {pending.map((todo, i) => {
        return (
          <PendingItems key={i} todo={todo} handleSubmit={handleSubmit} />
        )
      })}
    </div>
  )
}

export default Pending;


// const Pending = ({ pending }) => {
//   return (
//     <div>
//       <h4>Pending</h4>
//       {pending.map((todo, i) => {
//         return (
//           <div className="form-check" key={i}>
//             <input className="form-check-input" type="checkbox" checked={todo.completed} value="" id={'checkbox${todo.id}'} />
//             <label className="form-check-label" htmlFor={'checkbox${todo.id}'}>
//               {todo.title}
//             </label>
//           </div>
//         )
//       })}
//     </div>
//   )
// };

// export default Pending;