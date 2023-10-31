import { createRoot } from 'react-dom/client';
import { App } from './app';

import './shared/i18n';

createRoot(document.getElementById('root')!).render(<App />);
