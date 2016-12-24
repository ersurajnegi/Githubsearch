import {Component} from  '@angular/core';

@Component({
    selector:'common-component',
    template:'Hi from Common Component'
})
export class CommonComponent{
    constructor(){
        console.log("Hi from Common Component");
    }
}