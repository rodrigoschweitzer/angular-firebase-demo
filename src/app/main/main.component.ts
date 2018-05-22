import { Component, OnDestroy } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, takeWhile } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
	selector: 'afd-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {

	hideMenuButton: boolean = true;

	menuOpened: boolean = false;

	menuMode: string;

	title: string;

	private subscriptions: boolean = true;

	private mediaSubscription: Subscription;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private observableMedia: ObservableMedia) {
		this.listenMediaChanges();
		this.listenTitleChanges();
	}

	ngOnDestroy() {
		this.subscriptions = false;
		this.mediaSubscription.unsubscribe();
	}

	async logout() {
		this.router.navigate(['login']);
	}

	private listenMediaChanges() {
		this.mediaSubscription = this.observableMedia.subscribe(media => {
			const bigScreen = this.observableMedia.isActive('lg') || this.observableMedia.isActive('xl');
			this.menuMode = bigScreen ? 'side' : 'over';
			this.menuOpened = bigScreen;
			this.hideMenuButton = !this.menuOpened;
		});
	}

	private listenTitleChanges() {
		this.router.events
			.pipe(
				filter(event => event instanceof NavigationEnd),
				map(() => this.route),
				map(route => {
					while (route.firstChild) route = route.firstChild;
					return route;
				}),
				filter(route => route.outlet === 'primary'),
				mergeMap(route => route.data),
				takeWhile(() => this.subscriptions)
			)
			.subscribe(data => {
				this.title = data['title'] || 'Angular Firebase Demo';
			});
	}

}
