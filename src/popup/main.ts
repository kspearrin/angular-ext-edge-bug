import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import 'web-animations-js';

import { AppModule } from './app.module';

// Enabling prod mode causes the errors to go away, but the performance
// impact of this error are still there.
// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
