import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataset, Scale } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  listBreadCrumb = [
    {
      name: 'Dashboard',
      route: '/dashboard',
    },
  ];

  // chart
  barChartNewCustomerOptions: ChartOptions = {
    responsive: true,
  };
  barChartNewCustomerLabels: string[] = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ];
  barChartNewCustomerType: ChartType = 'bar';
  barChartNewCustomerLegend = false;
  barChartNewCustomerPlugins = [];
  barChartNewCustomerData: ChartDataset[] = [
    {
      data: [45, 37, 60, 70, 46, 33, 40],
      backgroundColor: '#7978ff',
      borderColor: '#007bff',
      hoverBackgroundColor: '#597a9e',
      barThickness: 30,
      borderRadius: 10,
    },
  ];

  barChartAccumulatedNumberOfCustomersOptions: ChartOptions = {
    responsive: true,
  };
  barChartAccumulatedNumberOfCustomersLabels: string[] = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ];
  barChartAccumulatedNumberOfCustomersType: ChartType = 'bar';
  barChartAccumulatedNumberOfCustomersLegend = false;
  barChartAccumulatedNumberOfCustomersPlugins = [];
  barChartAccumulatedNumberOfCustomersData: ChartDataset[] = [
    {
      data: [45, 37, 60, 70, 46, 33, 40],
      backgroundColor: '#c47aff',
      borderColor: '#007bff',
      hoverBackgroundColor: '#597a9e',
    },
  ];

  lineChartNumberOfSellerOptions: ChartOptions = {
    responsive: true,
  };
  lineChartNumberOfSellerLabels: string[] = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ];
  lineChartNumberOfSellerType: ChartType = 'line';
  lineChartNumberOfSellerLegend = false;
  lineChartNumberOfSellerPlugins = [];
  lineChartNumberOfSellerData: ChartDataset[] = [
    {
      data: [45, 37, 60, 70, 46, 33, 40],
      backgroundColor: 'rgb(179 208 249 / 48%)',
      borderColor: '#007bff',
      hoverBackgroundColor: '#597a9e',
      hoverBorderWidth: 10,
      pointBackgroundColor: '#007bff',
      pointHoverBorderColor: '#007bff',
      tension: 0.35,
      fill: true,
    },
  ];

  lineChartUnapprovedCustomersOptions: ChartOptions = {
    responsive: true,
  };
  lineChartUnapprovedCustomersLabels: string[] = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ];
  lineChartUnapprovedCustomersType: ChartType = 'line';
  lineChartUnapprovedCustomersLegend = false;
  lineChartUnapprovedCustomersPlugins = [];
  lineChartUnapprovedCustomersData: ChartDataset[] = [
    {
      data: [45, 37, 60, 70, 46, 33, 40],
      borderColor: '#66bfbf',
      hoverBackgroundColor: '#597a9e',
      hoverBorderWidth: 10,
      pointBackgroundColor: '#66bfbf',
      pointHoverBorderColor: '#66bfbf',
    },
  ];
  // ---

  ngOnInit(): void {}
}
