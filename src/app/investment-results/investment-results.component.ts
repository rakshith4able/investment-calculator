import { Component, computed, inject, input, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  investmentService = inject(InvestmentService);
  results = computed(() => this.investmentService.resultsData());
}
