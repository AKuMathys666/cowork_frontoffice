export class Subscription {
    id: number;
    subscription_type: number;
    user_id: number;
    subscription_date: string;
    subscription_end: string;
    email_sent: string;

    constructor(id: number, subscription_type: number, user_id: number, subscription_date: string, subscription_end: string, email_sent: string){
        this.id = id;
        this.subscription_type = subscription_type;
        this.user_id = user_id;
        this.subscription_date = subscription_date;
        this.subscription_end = subscription_end;
        this.email_sent = email_sent;
    }
  }