import {
	platformBrowserDynamic
} from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environment/environment';

import eruda from 'eruda';
import erudaDOM from 'eruda-dom';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
	.catch(console.error);

if(window && window.innerWidth < 800 && !environment.production) {
	eruda.init()
	eruda.add(erudaDOM)
}
