import { NgModule } from '@angular/core';
import {CommonComponent} from './common.component';
import {GitHubApiService } from './common.service';

@NgModule({
    declarations: [CommonComponent],
    exports:[CommonComponent],
    providers:[GitHubApiService],
})
export class CommonModule{
    constructor(){
        console.log('Hi from Common Module');
    }
    
}