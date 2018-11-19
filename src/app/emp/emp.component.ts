import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  //declare the variables: <name>: <type>
  empno: number 
  name: string
  department: string
  projects: Project[]
  isEditable:boolean //this is the boolean for the edit/save toggling button (declaring)
  isAddingProject:boolean //for the form to display and disappear (depending on whether selected + or not) (declaring obv)
  joiningDate:Date
  bandColor:string
 
  isvalidProject:boolean
  message:string  //declaring more new variables

  //is executed when the object is created
  constructor() {
    
    this.empno=61078
    this.name="Liam McDearmid" 
    this.department="L&D"
    this.joiningDate= new Date()
    this.bandColor=""

    this.projects= 
    [{projectid:1,name:"Admin",location:"UK"}, //this is JSON
    {projectid:2,name:"App",location:"US"},
    {projectid:3,name:"Mobile",location:"IN"},
    {projectid:4,name:"Test",location:"IN"}]
    this.isEditable=false //this is the boolean for the edit/save toggling button (initialising)
    this.isAddingProject=false //initialising the form disaply/disappear feature
    //localStorage.setItem("empno", this.empno.toString()) //stores the empno in local storage, 1:key,2:value
    //then parses it to string to display
    //localStorage.setItem("empProjects",JSON.stringify(this.projects)) // does the same but JSON
    //JSON uses stringify instead of to string to parse

    this.isvalidProject=true //initialising the newly made variables
    this.message=""

   }

   ngOnInit() {
    this.empno = Number.parseInt(localStorage.getItem("empno"))
    this.projects = JSON.parse(localStorage.getItem("empProjects")) 
    this.name = localStorage.getItem("name")
    this.department = localStorage.getItem("department")
    this.joiningDate = new Date(Date.parse(localStorage.getItem("joiningDate"))) //parse the date
    
}

   toggleEditFields(){
     this.isEditable=!this.isEditable //if the value will change true or false depending on when the user clicks


     localStorage.setItem("empno", this.empno.toString()) //same as line 37: ensures the local storage changes when you save the data
     localStorage.setItem("name", this.name)
     localStorage.setItem("department", this.department)
     this.joiningDate=new Date(this.joiningDate)
     localStorage.setItem("joiningDate", this.joiningDate.toDateString()) //store the date in local storage

   }

   showProjectForm(){ //to display the form once '+' is clicked
     this.isAddingProject=true //here the adding project is true
   }

   deleteProject(index:number){ //index as the argument as we will select which project via the index (index=arrary) , to delete that project

    this.projects.splice(index,1) //deletes one object starting from the index provided

     localStorage.setItem("empProjects",JSON.stringify(this.projects)) // ensures local storage updates when you delete a project
   }

   addNewProject(newProject:Project){ // : just says what type the 'newProject' argument is
    /* this.projects.push(newProject)
     localStorage.setItem("empProjects",JSON.stringify(this.projects)) // ensures local storage updates when you add a project
     this.isAddingProject=false //here the adding project is false    
     
     commented this code out as this is the code before we added the if functions/message to adding project
     */

   //this is the if statements to create the message of when adding a project
   // is NaN function checks if it is a number
   if(isNaN(newProject.projectid)){
     this.isvalidProject=false
     this.message="Enter Valid Project Id"
   }
   else if(newProject.name.length<4){
     this.isvalidProject=false
     this.message="Enter valid Project Name"
   }
   else if(newProject.location.length<2){
     this.isvalidProject=false
     this.message="Enter valid Project Location"
   }
   else{
     this.projects.push(newProject)
     localStorage.setItem("empProjects",JSON.stringify(this.projects))
     this.isAddingProject=false
     this.isvalidProject=true
     this.message=""
   }




   }

}
