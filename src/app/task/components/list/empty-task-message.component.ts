import { Component } from '@angular/core';

@Component({
    selector: 'afd-empty-task',
    template: `
        <div class="mat-body-2 push" fxLayout="column" fxLayoutAlign="center center">
            <div class="empty-image"></div>
            <div>You don't have any tasks.</div>
        </div>
    `,
    styles: [`
        .empty-image {
            width: 100px;
            height: 100px;
            background: url('assets/images/empty_tasks.png') round;
        }
    `]
})
export class EmptyTaskComponent {
    constructor() { }
}
