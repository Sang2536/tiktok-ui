//  layout
import { HeaderOnly } from '~/components/Layout';

//  Pages
import HomePage from '~/pages/Home';
import Following from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';
import LivePage from '~/pages/Live';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: ProfilePage },
    { path: '/upload', component: UploadPage, layout: HeaderOnly },
    { path: '/search', component: SearchPage, layout: null },
    { path: '/live', component: LivePage },
];

const privateRoutes = [
    // { path: '/@:nickname', component: ProfilePage }
];

export { publicRoutes, privateRoutes };
