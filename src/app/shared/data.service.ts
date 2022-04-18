import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, throwError, catchError } from 'rxjs';

//Injectable - Decorator - Marks a class as available to be provided and 
//njected as a dependency.
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = 'https://api.spacexdata.com/v3/launches'

  constructor(private httpClient: HttpClient) {

   }

   errorHandling(error: HttpErrorResponse){
    let errorMessage = 'Unknown error!';
     if(error.error instanceof ErrorEvent){
       //Client side error
       errorMessage = `Error: ${error.error.message}`;
     }else{
       //Server side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }

     window.alert(errorMessage);
     return throwError(errorMessage);
  }

  getMissions(){
     return this.httpClient
     .get(`${this.BASE_URL}`)
     .pipe(retry(3), catchError(this.errorHandling))
  }

  //get user by id
  getMissionByNumber(mId: string){
    console.log("GetMissionByNumber")
   return this.httpClient.get(`${this.BASE_URL}/${mId}`)
  }

  getMissionByParam(){
    //http://reqres.in/api/users?page=2
    const parms = {
      params: new HttpParams({fromString: "2"})
    }
    console.log(parms)
    return this.httpClient.get('https://api.spacexdata.com/v3/launches/', parms)
  }
/**
*
* const headers = new HttpHeaders()
* .set("Content-Type", "application/json");
* const params = new HttpParams()
* .set('page', pageNo)

* return this.http.get(this.url, {headers, params})
*/

}
