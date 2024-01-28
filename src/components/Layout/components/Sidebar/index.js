import classNames from 'classnames/bind';

import MenuSidebar, { MenuItemSidebar } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import {
    CompassActveIcon,
    CompassIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserActiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
    UserIcon,
} from '~/components/Icons';
import routesConfig from '~/config/routes';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sideber() {
    return (
        <aside className={cx('wrapper')}>
            <MenuSidebar>
                <MenuItemSidebar
                    title="For you"
                    to={routesConfig.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItemSidebar
                    title="Following"
                    to={routesConfig.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItemSidebar
                    title="Explore"
                    to={routesConfig.explore}
                    icon={<CompassIcon />}
                    activeIcon={<CompassActveIcon />}
                />
                <MenuItemSidebar
                    title="LIVE"
                    to={routesConfig.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
                <MenuItemSidebar
                    title="Profile"
                    to={routesConfig.profile}
                    icon={<UserIcon />}
                    activeIcon={<UserActiveIcon />}
                />
            </MenuSidebar>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sideber;
