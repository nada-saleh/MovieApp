import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllDataPageComponent } from './allDataPage/allDataPage.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';




import { EventAppComponent } from './events-app.component';
import { StudentCourseComponent } from './studentCourse/studentCourse.component';
import { FormsModule } from '@angular/forms';
import { ForTestComponent } from './forTest/forTest.component';


const routes: Routes = [
  { path: '', redirectTo: 'studentData', pathMatch: 'full' },
  { path: 'studentData', component: AllDataPageComponent },
  { path: 'add', component: StudentCourseComponent },
  { path: 'add/:id', component: StudentCourseComponent },
];

@NgModule({

    declarations: [
        EventAppComponent,
        AllDataPageComponent,
        StudentCourseComponent,
        ForTestComponent
    ],
    providers:[],
    bootstrap: [EventAppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule
      ],

    exports: [RouterModule],
})
export class AppModule {


}
