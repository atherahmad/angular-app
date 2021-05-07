export interface Appointment {
    status: string,
    data: {
    _id: string,
    appointmentDate: string,
    storeName: string,
    slotName: string,
        appoointmentSlot: number,
        storeId: string,
        creatorId:string,
    }
}
