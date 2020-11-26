import RegisterComponent from '../containers/Register';
import LoginComponent from '../containers/Login';
import ContactsComponent from '../containers/Contacts';
import CreateContactComponent from '../containers/CreateContact';

const routes = [
    {
        path:'/auth/register',
        componenent: RegisterComponent,
        titile: 'Register',
    },
    {
        path:'/auth/login',
        componenent: LoginComponent,
        titile: 'Login',
    },
    {
        path:'/',
        componenent: ContactsComponent,
        titile: 'Contacts',
    },
    {
        path:'/contacts/create',
        componenent: CreateContactComponent,
        titile: 'Create Contact',
    }
];

export default routes;