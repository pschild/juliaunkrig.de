import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectService} from "./project.service";
import {ProjectItemComponent} from "./project-item.component";
import {PipesModule} from "../../shared/pipes/pipes.module";
import {MediaSliderModule} from "../media-slider/media-slider.module";

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        MediaSliderModule
    ],
    declarations: [
        ProjectItemComponent
    ],
    exports: [
        ProjectItemComponent
    ],
    providers: [
        ProjectService
    ]
})
export class ProjectItemModule {
}