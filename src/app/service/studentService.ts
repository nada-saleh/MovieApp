
import { HttpClient, HttpHeaders } from "@angular/common/http"
import {Injectable} from "@angular/core"
import { Observable } from "rxjs";
import { IStudent } from "../IService/istudent"
import { IstudentforList } from "../IService/IstudentforList";

@Injectable({
providedIn:'root'
})

export class studentService{

  constructor(private httpClient: HttpClient) {

  }

  getAllStudents(): Observable<IstudentforList[]> {
    return this.httpClient.get<IstudentforList[]>('https://localhost:7230/api/Student/AllStudents');
  }

  getStudentById(Id: number): Observable<IStudent> {
    return this.httpClient.get<IStudent>(`https://localhost:7230/api/Student/${Id}`);
  }

  createStutent(newStudent: IStudent): Observable<IStudent>  {
    console.log(JSON.stringify(newStudent))
    return this.httpClient.post<IStudent>('https://localhost:7230/api/Student/CreateSudent',newStudent)

  }


  updateStudent(updateStudent: IStudent): Observable<IStudent> {
    console.log(updateStudent)
    return this.httpClient.put<IStudent>(`https://localhost:7230/api/Student/UpdateSudent/`, updateStudent)
  }


  deleteStudent(Id: number): Observable<any> {
    return this.httpClient.delete(`https://localhost:7230/api/Student/DeleteSudent/${Id}` )
  }

}
