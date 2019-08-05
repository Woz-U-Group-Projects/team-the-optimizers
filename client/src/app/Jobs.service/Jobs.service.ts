import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class JobsService {
  private baseUrl = "http://localhost:8080/jobs";

  constructor(private http: HttpClient) {}

  getJobs(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createJobs(jobs: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, jobs);
  }

  updateJobs(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteJobs(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getJobsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
