import { AppoinmentInterface } from "../appointments/edit-appointment/appoinment-interface";
import { SlotInterface } from "../appointments/edit-appointment/slot-interface";

export let slotValidator = (appointment:AppoinmentInterface, slot:SlotInterface) => {
    
    let currentDate = new Date();
    let dateArray = appointment.appointmentDate.split("/");
    let selectedAppointmentDate = new Date(+dateArray[2], +dateArray[1] - 1, +dateArray[0]);
        
    selectedAppointmentDate.setHours(slot ? +`${slot.appointmentStartTime.slice(0, 2)}`: +appointment.slotName.slice(0, 2));
    selectedAppointmentDate.setMinutes(slot?+`${slot.appointmentStartTime.slice(-2)}`: +appointment.slotName.slice(-2));

  if (selectedAppointmentDate.getFullYear() > currentDate.getFullYear()) return true
    else if (selectedAppointmentDate.getFullYear() < currentDate.getFullYear()) return false
      else{
        if (selectedAppointmentDate.getMonth() > currentDate.getMonth()) return true
        else if (selectedAppointmentDate.getMonth() < currentDate.getMonth()) return false

        else {
          if (selectedAppointmentDate.getDate() > currentDate.getDate()) return true
          else if (selectedAppointmentDate.getDate() < currentDate.getDate()) return false

          else {
            if (selectedAppointmentDate.getHours() > currentDate.getHours()) return true
              else if (selectedAppointmentDate.getHours() < currentDate.getHours()) return false
            else {
                  if (selectedAppointmentDate.getMinutes() > currentDate.getMinutes()) return true
                    else if (selectedAppointmentDate.getMinutes() < currentDate.getMinutes()) return false
            }
        }

      }


      }

}