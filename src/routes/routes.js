import configs from '~/configs';

//  layout
import { HeaderOnly } from '~/layouts';

//  Pages
import HomePage from '~/pages/Home';
import Following from '~/pages/Following';
import ExplorePage from '~/pages/Explore';
import LivePage from '~/pages/Live';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';

const publicRoutes = [
    { path: configs.routes.home, component: HomePage },
    { path: configs.routes.following, component: Following },
    { path: configs.routes.explore, component: ExplorePage },
    { path: configs.routes.live, component: LivePage },
    { path: configs.routes.profile, component: ProfilePage },
    { path: configs.routes.upload, component: UploadPage, layout: HeaderOnly },
    { path: configs.routes.search, component: SearchPage, layout: null },
];

const privateRoutes = [
    // { path: '/@:nickname', component: ProfilePage }
];

export { publicRoutes, privateRoutes };
