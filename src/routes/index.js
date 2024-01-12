//  layout
import { HeaderOnly } from '~/components/Layout';

//  Pages
import HomePage from '~/pages/Home';
import Following from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: Following },
    { path: '/upload', component: UploadPage, layout: HeaderOnly },
    { path: '/search', component: SearchPage, layout: null },
];

const privateRoutes = [{ path: '/profile', component: ProfilePage }];

export { publicRoutes, privateRoutes };
