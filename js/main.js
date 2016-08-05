import HeaderComponent from './header-component';
import HeaderView from "./header-view";

const headerView = new HeaderView(document.querySelector('.header'));
new HeaderComponent(headerView);
