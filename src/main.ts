import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environment/environment';
import eruda from 'eruda';
import erudaDOM from 'eruda-dom';

import { AppModule } from './app/app.module';
platformBrowserDynamic()
  .bootstrapModule(AppModule)
	.catch(err => console.error(err));


if(window && window.innerWidth < 800 && !environment.production) {
	eruda.init()
	eruda.add(erudaDOM)
}
