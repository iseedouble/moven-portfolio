import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataServiceService } from '../../../../service/shared-data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-details-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-details-project.component.html',
  styleUrl: './card-details-project.component.scss',
})
export class CardDetailsProjectComponent implements OnInit {
  data: any;

  constructor(private sharedDataService: SharedDataServiceService) {}

  ngOnInit(): void {
    this.data = this.sharedDataService.getData()
  }
}
