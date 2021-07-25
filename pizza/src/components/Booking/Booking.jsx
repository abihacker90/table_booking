import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { DateTimePicker } from '@material-ui/pickers'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';


const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(38, 70, 83, 0.7)",
    height: "100vh",
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      
    },
    '& .Mui-focused': {
      color: "black",

    }, 
    '& .MuiInput-underline:after': {
      borderColor: "black"
    }
  },
}));

export default function Booking() {
    const classes = useStyles();
    
    const [baseError, setError] = useState(null);
    const [text, setText] = useState("")

    function validateMail(e) {
        let inputMail = e.target.value;
        const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        console.log(inputMail);
        if (regexMail.test(inputMail) === false) {
           setError(true);
           setText("Invalid email address")
        } else  {
          setError(null);
          setText("")
        }
        console.log(regexMail.test(inputMail)); 
    }

    //form to handle console logging the submitted form
    function logBooking(e) { 

      let array = Array.from(e.target).splice(0,4); //get the form and transform it into an array, splice is required to get rid of the "fake" input which is the button
      let responseA = [] //empty array to be filled with the input values

      array.map((input) => { 
       
        let data = input.name +": " + input.value  //gets the name and value of each input field and pushes it to the response array
        responseA.push(data)
        return responseA
      })
     
      console.log(responseA) 
    }


  const timezoneOffset = (new Date()).getTimezoneOffset() * 60000 ; //calculate difference between UTC and local time

  let startDate = (new Date((Date.now()) - timezoneOffset)) //set start date to current time but double the offset (ie. HU is UTC+2, timezoneOffset is two hours (-7200000ms), so by deducting the offset we're actually adding 2 hours to current time (-(-2h) = +2h) )

  startDate.setHours(startDate.getHours() + 1 ) //add an extra hour for the reservation requirement
  let bookStart = startDate.toISOString().slice(0, 16); //toISOString converts our date to the correct format, but UTC, so with the extra offset + 1 hour we end up with the correct time, slice is used to get rid of the seconds and milliseconds

  const [selectedDate, handleDateChange] = useState(bookStart); //state hook used for setting the default value for date picker and handling input update once date&time is selected
  
    return (
      <>
      
      <div id="bookingPage">
      <h1 id="bTitle">Book a table!</h1>
      <form className={classes.root} id="formBkg" noValidate autoComplete="off" onSubmit={(e) => { e.preventDefault(); logBooking(e); alert('Booking complete'); } }>
       
        <div>
          <TextField 
            required 
            id="standard-required" 
            label="Name" 
            name="Name"
            InputProps={{inputProps: {className: "inputFields"}}}
          />
        </div>
        <div>
          <TextField 
            required 
            id="standard-required" 
            label="Email" 
            name="Email"
            type="email" 
            onBlur={validateMail} 
            error={baseError} 
            helperText={text}  
            InputProps={{inputProps: {className: "inputFields"}}}
          />
        </div>
        <div>

        {/* replaced the text field with date&time picker  */}
        
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DateTimePicker 
            required
            name="Date"
            minDate = {bookStart}
            ampm={false}
            value={selectedDate} 
            onChange={handleDateChange} 
            strictCompareDates = {true}
            minDateMessage="Give us at least an hour to prepare"
          />
        </MuiPickersUtilsProvider>

        </div>
        <div>
          <TextField
            required
            name="Nr. of people"
            id="outlined-number"
            label="Number of people"
            type="number"
            InputProps={{ inputProps: { min: 1, max: 10, className: "inputFields" } }}

          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<RestaurantMenuIcon>send</RestaurantMenuIcon>}
            type="submit"
            id="submitBtn"
          >
            Send
          </Button>
        </div>
      </form>
      </div>
     </>
    );
  }