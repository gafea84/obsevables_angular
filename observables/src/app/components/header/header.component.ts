import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectedGender($event: any): void {
    this.router.navigate(['/gender', $event.target.value])
  }

  searchName(): void {
    let busqueda = (this.name !== "") ? this.name : 'none';
    this.router.navigateByUrl('/home?name=' + busqueda)


  }

}
