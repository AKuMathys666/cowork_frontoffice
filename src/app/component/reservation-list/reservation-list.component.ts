import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService} from '../../service/reservation.service';
import { Reservation } from '../../model/reservation';
import { JwtHelperService } from "@auth0/angular-jwt";

 
@Component({
	selector: 'home',
	templateUrl: './reservation-list.component.html'
})
export class ReservationListComponent {
	title: string;
	reservations: Reservation[];
	helper = new JwtHelperService();
    page: number;
    pageSize: number;

	constructor(private router: Router, private reservationService: ReservationService){}

	ngOnInit(){
		if(this.helper.isTokenExpired(localStorage.getItem('token'))){
			console.log('expired')
			this.router.navigateByUrl('login')
		}
        this.page = 1;
        this.pageSize = 7;
		this.getUserReservations();
	}

	private getUserReservations(): void{
		let id = 12

		const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
		this.reservationService.getReservations(decodedToken.logger.id)
			.subscribe(reservations => {
				this.reservations = reservations});
	}

	private deletReservation(id: number): void{
		this.reservationService.deleteReservation(id)
			.subscribe(deleted => {
				if(deleted){
					this.reservations = this.reservations.filter(item => item.id != id)
				}

			})
	}
}