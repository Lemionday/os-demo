import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import Typography from '@mui/material/Typography';
import { Box, Button, Grid, List, ListItem, TextField } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

let endpoint = "http://localhost:8080";

function Updated() {
  const [isUpdated, setIsUpdated] = useState(true);
  return () => setIsUpdated(!isUpdated);
}

function ToDoList() {
  const updated = Updated();
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => { getAllTask() }, [])

  function onSubmit() {
    console.log(task)
    if (task) {
      fetch(endpoint + "/api/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          "task": task
        })
      }).then(res => {
        getAllTask();
        setTask("");
        console.log(res);
      })
    }
  }

  function getAllTask() {
    fetch(endpoint + "/api/task", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => { return res.json() })
      .then(data => {
        if (data) setItems(data);
        else setItems([]);

        updated();
      })
  };

  function updateTask(id) {
    fetch(endpoint + "/api/task/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        console.log(res);
        getAllTask();
      }, []);
  };

  const undoTask = (id) => {
    fetch(endpoint + "/api/undoTask/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        console.log(res);
        getAllTask();
      });
  };

  const deleteTask = (id) => {
    fetch(endpoint + "/api/deleteTask/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        console.log(res);
        getAllTask();
      });
  };

  return (
    <div>
      <Typography variant='h3' gutterBottom align="center">
        TODO List
      </Typography>
      <Box className="row">
        <Grid container justifyContent="center" spacing={4}>

          <Grid item>
            <TextField
              type="text"
              label="Create Task"
              value={task}
              onChange={(newValue) => setTask(newValue.target.value)} variant="outlined" />
          </Grid>

          <Grid item alignItems="stretch" style={{ display: "flex" }}>
            <Button startIcon={<AddCircleOutlineOutlinedIcon />}
              sx={{ color: "chartreuse", backgroundColor: 'gray' }}
              onClick={onSubmit}>Add</Button>
          </Grid>

        </Grid>
      </Box>
      <Box className="row">
        <Grid container spacing={4}
          direction="column"
          justifyContent="space-evenly"
        >
          {items.map(item => {
            return (
              <Grid item xs={3} sm={6} md={4} >
                <TodoItem
                  key={item._id}
                  item={item}
                  updateTask={() => updateTask(item._id)}
                  undoTask={() => undoTask(item._id)}
                  deleteTask={() => deleteTask(item._id)}
                />
              </Grid>
            )
          })}
        </Grid>
      </Box>

    </div >
  );
}

export default ToDoList;
