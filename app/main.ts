import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
// import {TohComponent} from './toh.component';
import { HTTP_PROVIDERS } from 'angular2/http';

//bootstrap(TohComponent, [HTTP_PROVIDERS]);


bootstrap(AppComponent, HTTP_PROVIDERS);
