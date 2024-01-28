import routesConfig from '~/config/routes';

//  layout
import { HeaderOnly } from '~/components/Layout';

//  Pages
import HomePage from '~/pages/Home';
import Following from '~/pages/Following';
import ExplorePage from '~/pages/Explore';
import LivePage from '~/pages/Live';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';

const publicRoutes = [
    { path: routesConfig.home, component: HomePage },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.explore, component: ExplorePage },
    { path: routesConfig.live, component: LivePage },
    { path: routesConfig.profile, component: ProfilePage },
    { path: routesConfig.upload, component: UploadPage, layout: HeaderOnly },
    { path: routesConfig.search, component: SearchPage, layout: null },
];

const privateRoutes = [
    // { path: '/@:nickname', component: ProfilePage }
];

export { publicRoutes, privateRoutes };
