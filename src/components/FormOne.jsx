import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from 'uuid';
import { stringify } from "uuid";

function FormOne({getTheData}) {


      const [data, setData] = useState({
        id:"",
          fullname:"",
          age:""
      })
      
   

//   useEffect(() => {
//     localStorage.setItem('data', JSON.stringify(data));
//   }, [data]);
   
// let x
//   useEffect(() => {
//     x= localStorage.getItem('data', JSON.stringify(data));
//   }, [data]);



function handlechange(e) {
  let value=e.target.value

  setData({...data,id:uuidv4(),[e.target.name]:value})

}




  return (
    <>
    


      <Box sx={{ m: 5 }}>
        <Box
          sx={{
            width: 350,
            height: 350,
            bgcolor: "#f5f5f5",
            border: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <TextField
            name="fullname"
            value={data.fullname}
            onChange={handlechange}
              sx={{
                bgcolor: "white",
              }}
              required
              placeholder="enter Name"
              label="Name"
            />
          </Box>

          <Box>
            <TextField
            type="number"
            name="age"
            value={data.age}

            onChange={handlechange}

              sx={{
                bgcolor: "white",
              }}
              required
              placeholder="enter age"
              label="Age"
            />
          </Box>

          <Box sx={{ display: "flex", gap: 5 }}>
            <Button
          onClick={()=>getTheData(data)}
              variant="contained"
              sx={{
                bgcolor: "#00bfa5",
                border: 0,
                height: 30,
                width: 100,
                fontSize: 15,
              }}
            >
              Save
            </Button>
            <Button
               onClick={()=>setData({
                 id:"",
          fullname:"",
          age:""
      })}
              variant="contained"
              sx={{
                bgcolor: "#01579b",
                border: 0,
                height: 30,
                width: 100,
                fontSize: 15,
              }}

            >
              Clear
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default FormOne;
