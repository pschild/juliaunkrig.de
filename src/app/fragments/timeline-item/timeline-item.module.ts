import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineItemComponent} from "./timeline-item.component";
import {TimelineService} from "./timeline.service";
import {PipesModule} from "../../shared/pipes/pipes.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule
    ],
    declarations: [
        TimelineItemComponent
    ],
    exports: [
        TimelineItemComponent
    ],
    providers: [
        TimelineService
    ]
})
export class TimelineItemModule {
}