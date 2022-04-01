import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Formtwo({ recieveData, clearTheData,clearallvalue }) {


  return (
    <Box sx={{ m: 5 }}>
      <Box
        sx={{
          width: 350,
          height: 350,
          bgcolor: "#f5f5f5",
          border: 1,
          position: "relative",
        }}
      >
        <Box sx={{ margin: 2 }}>
          <Typography variant="h6" m="2" color="initial">
            Users
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 10,
              bgcolor: "black",
              height: 20,
              alignItems: "center",
            }}
          >
            <Typography variant="body2" sx={{ marginLeft: 1 }} color="white">
              Full Name
            </Typography>
            <Typography variant="body2" color="white">
              Marks
            </Typography>
            <Typography variant="body2" color="white"></Typography>
          </Box>
        </Box>
        {
         recieveData[0]!=0?
        <>
          {
            recieveData.map((e)=>{
              const{id,fullname,age}=e
              return(
                <>
               
<Box sx={{ marginTop: 1 }} key={id}>
            <Box
              sx={{
                display: "flex",
                border: 1,
                justifyContent: "flex-start",
                gap: 10,
                bgcolor: "white",
                height: 35,
                alignItems: "center",
                margin:2
              }}
            >
                  <Typography variant="body2" sx={{ marginLeft: 1 }} color="black" key={id}>
                {fullname}
              </Typography>
              <Typography variant="body2" color="black">
                {age}
              </Typography>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer" }}
                color="red"
                onClick={()=>clearTheData(id)}
              >
                CLEAR
              </Typography>

              </Box>
                


            </Box>
                </>
              )
           
            })
          }
        </>:<>
        <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              bgcolor: "#00bfa5",
              height: 40,
              alignItems: "center",
              margin:2
            }}
          >
           <Typography variant="h6" sx={{ marginLeft: 1 }} color="white">
no data present
            </Typography>
          </Box>
        
        
        
        </>
        }
        <Button
          variant="contained"
          sx={{
            marginLeft: 10,
            position: "absolute",
            top: 300,
            maxHeight: 300,
            bgcolor: "black",
            border: 0,
            height: 35,
            width: 200,
            fontSize: 15,
          }}

          onClick={clearallvalue}
        >
          Clear all
        </Button>
      </Box>
    </Box>
  );
}

export default Formtwo;
