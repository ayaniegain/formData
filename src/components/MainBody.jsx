import React,{useState} from 'react'
import {Paper,Box} from '@mui/material';
import Navbar from "../components/NavBar"
import FormOne from "../components/FormOne"
import FormTwo from "../components/FormTwo"

function MainBody() {
  let [recieveData, setRecieveData] = useState([])

  // let recValue=[]
  // recValue.push(recieveData)
   recieveData=[recieveData]

   
const clearallvalue=()=>{

  setRecieveData([])
  
}



const getTheData=(e)=>{
  setRecieveData(e)
}

const clearTheData=((item)=>{
 let fdata= recieveData.filter((e)=>e.id!==item)
 setRecieveData(fdata)
})
  return (
    <>
    <Paper variant="outlined" square  elevation={3} 
    
    sx={{
      MaxWidth: 700,
      margin:7,
          MaxHeight: 800,
          
    }}
    
    >
    <Box>

        <Navbar/>
    </Box>

<Box sx={{display:"flex", justifyContent:"space-evenly"}}> 


        <FormOne getTheData={getTheData}/>
        <FormTwo recieveData={recieveData} clearTheData={clearTheData} clearallvalue={clearallvalue} />
        </Box>
    </Paper>
    </>
  )
}

export default MainBody