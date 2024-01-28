import classNames from 'classnames/bind';

import MenuSidebar, { MenuItemSidebar } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import {
    CompassActiveIcon,
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
import configs from '~/configs';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <MenuSidebar>
                <MenuItemSidebar
                    title="For you"
                    to={configs.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItemSidebar
                    title="Following"
                    to={configs.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItemSidebar
                    title="Explore"
                    to={configs.routes.explore}
                    icon={<CompassIcon />}
                    activeIcon={<CompassActiveIcon />}
                />
                <MenuItemSidebar
                    title="LIVE"
                    to={configs.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
                <MenuItemSidebar
                    title="Profile"
                    to={configs.routes.profile}
                    icon={<UserIcon />}
                    activeIcon={<UserActiveIcon />}
                />
            </MenuSidebar>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
