import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentService } from '../../core/services/incidents/incident-service';
import { Incident } from '../../shared/models/incident';

@Component({
  selector: 'app-incidents',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './incidents.html',
  styleUrls: ['./incidents.css'],
})
export class Incidents implements OnInit {
  incidents = signal<Incident[]>([]);

  constructor(private incidentService: IncidentService) {}

  ngOnInit(): void {
    this.incidentService.getIncidents().subscribe((data) => {
      this.incidents.set(data);
    });
  }

  trackById(index: number, item: Incident) {
    return item.id;
  }
}
