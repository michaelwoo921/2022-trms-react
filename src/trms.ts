export class EmployeeInfo {
  empName: string = '';
  role: string = '';
  supName: string = '';
}

export class Event {
  eventName: string = '';
  eventType: string = '';
  eventBegins: string = '';
  eventEnds: string = '';
  eventLocation: string = '';
  eventDescription: string = '';
  eventCost: number = 0;
  eventGradingFormat: string = '';
}

export class Trms {
  emp: EmployeeInfo = new EmployeeInfo();
  event: Event = new Event();
}
