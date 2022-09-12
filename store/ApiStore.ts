import { observable, action, makeObservable, computed, makeAutoObservable } from 'mobx'
import axios from 'axios';

export class DataStore {
  responseData = ""
  constructor() {
    makeObservable(this, {
      responseData: observable,
    //  clickButtonAction: action,
      apiCall: computed,
    })
  }

  get apiCall() {
    axios.get('https://catfact.ninja/fact')
        .then(function(this:any, response:any){
            this.responseData = response
        })
        .catch(function(this:any, err:any){
            this.responseData = err
        });
        return this.responseData
    }
}
export const dataStore = new DataStore()