export class Trms {
  name: string = '';
  supName: string = '';
  createdDate: string = '';
  role = ''; // 2020-1-4
  eventName = '';
  eventType: string = '';
  eventStartDate: string = ''; //2020-3-10
  eventEndDate = '';
  eventLocation: string = '';
  eventDescription: string = '';
  eventCost: number = 0;
  eventGradingFormat?: string = ''; //from reference table
  justification? = '';
  proReimbursement?: string | number; //ready only
  attachments: string = '';
  grade: string = '';
  reimbursement: number = 0;

  comments = '';
  approval = {
    sup: { status: '', date: '', reason: '', additional_info: '' },
    head: { status: '', date: '', reason: '', additional_info: '' },
    benco: { status: '', date: '', reason: '', additional_info: '' },
  };
}
