import './styles/styles.css';
import {
  myIcon,
  renderListsToForm,
  renderListView,
  renderTaskView,
  footerLink,
} from './modules/UI';

footerLink.appendChild(myIcon);
renderListsToForm();
renderListView();
renderTaskView('all Tasks');
