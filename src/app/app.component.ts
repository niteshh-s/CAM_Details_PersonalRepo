import { Component, OnDestroy, ViewEncapsulation, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { isDefined, NavItem } from '@slb-dls/angular-material/shared';
import { SlbNotificationItem } from '@slb-dls/angular-material/notifications-panel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent{
    
    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private renderer:Renderer2){

        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg-symbols.svg'));

    }


}
