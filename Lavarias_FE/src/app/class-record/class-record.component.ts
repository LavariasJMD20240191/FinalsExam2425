import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-record',
  templateUrl: './class-record.component.html',
  styleUrl: './class-record.component.css'
})
export class ClassRecordComponent implements OnInit{

  students = [
    { id: 1, name: 'Alice Johnson', activityType: 'Quiz', details: 'Scored 90% on Math Quiz' },
    { id: 2, name: 'Bob Smith', activityType: 'Assignment', details: 'Submitted late but complete' },
    { id: 3, name: 'Charlie Brown', activityType: 'Exam', details: 'Scored 85% on Science Exam' },
    // Add more dummy students
  ];

  paginatedStudents: any[] = [];
  currentPage = 1;
  itemsPerPage = 3;
  totalPages = 0;

  showViewModal = false;
  showEditModal = false;
  selectedStudent: any = null;
  editStudentData: any;

  ngOnInit(){
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.students.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedStudents = this.students.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  viewStudent(student: any) {
    this.selectedStudent = student;
    this.showViewModal = true;
  }

  editStudent(student: any) {
    this.editStudentData = { ...student };
    this.showEditModal = true;
  }
  
  saveStudent() {
    // Find the index of the student being edited
    const index = this.students.findIndex((s) => s.id === this.editStudentData.id);

    if (index !== -1) {
      this.students[index] = { ...this.editStudentData }; // Update the student data
      this.updatePagination(); // Refresh the paginated data
      this.closeModal(); // Close the modal
    }
  }

  closeModal() {
    this.showViewModal = false;
    this.showEditModal = false;
    this.selectedStudent = null;
    this.editStudentData = null;
  }
}

