
import axios from 'axios';
const URL = 'http://localhost:3002'

export function getDataFromDb(callback) {
        axios.get(`${URL}/api/getData`)
          .then(res => callback({ data: res.data.data }))
          .catch(err => callback({ error: err }));
        
      };
      export function data(callback) {
        axios.get('www.example.de')
   
    }

export const putDataToDB = (metadata) => {  
    axios.post(`${URL}/api/putData`, {
      id: 2,
      metadata
    });
  };

export const deleteFromDB = idTodelete => {
    axios.delete(`${URL}/api/deleteData`, {
      data: {
        id: idTodelete
      }
    });
  };

export const updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post(`${URL}/api/updateData`, {
      id: objIdToUpdate,
      update: { message: updateToApply }
    });
  };
