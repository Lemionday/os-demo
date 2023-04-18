import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

let endpoint = "http://localhost:8080";

function ToDoList() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  // onChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // onSubmit = () => {
  //   let { task } = this.state;
  //   // console.log("pRINTING task", this.state.task);
  //   if (task) {
  //     axios
  //       .post(
  //         endpoint + "/api/task",
  //         {
  //           task,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/x-www-form-urlencoded",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         this.getTask();
  //         this.setState({
  //           task: "",
  //         });
  //         console.log(res);
  //       });
  //   }
  // };

  function getTask() {
    fetch(endpoint + "/api/task", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => { return res.json() })
      .then(data => { setItems(data) })
  };

  useEffect(() => { getTask() })


  // updateTask = (id) => {
  //   axios
  //     .put(endpoint + "/api/task/" + id, {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       this.getTask();
  //     });
  // };

  // undoTask = (id) => {
  //   axios
  //     .put(endpoint + "/api/undoTask/" + id, {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       this.getTask();
  //     });
  // };

  // deleteTask = (id) => {
  //   axios
  //     .delete(endpoint + "/api/deleteTask/" + id, {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       this.getTask();
  //     });
  // };

  return (
    <div>
      <div className="row">
        {/* <Card.Group>{items}</Card.Group> */}
        {items.map(item => {
          <TodoItem item={item} />
        })}
      </div>
    </div>
  );
}

export default ToDoList;
