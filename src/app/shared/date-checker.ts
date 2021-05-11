 let dateValidator=(selectedDate: string)=> {
     
     let response = {
         validDate: false,
         holiday: false
     };
     let newDate = new Date(selectedDate);
     let currentDate = new Date();
     if (newDate.getFullYear() > currentDate.getFullYear()) response.validDate=true
        else if(newDate.getFullYear() < currentDate.getFullYear()) response.validDate=false
            else if(newDate.getMonth() > currentDate.getMonth()) response.validDate=true
                else if (newDate.getMonth() < currentDate.getMonth()) response.validDate=false
                    else if (newDate.getDate() > currentDate.getDate()) response.validDate=true
                        else if(newDate.getDate() < currentDate.getDate()) response.validDate=false
                            else response.validDate = true
     
     console.log(newDate.getMonth(), currentDate.getMonth(), "month in date validator")
     console.log(newDate.getDate(), currentDate.getDate(), "date in date validator")
     if (newDate.getUTCDay() < 6) response.holiday = false
        else response.holiday = true;
     
     return response

}

export {dateValidator as dateValidator}