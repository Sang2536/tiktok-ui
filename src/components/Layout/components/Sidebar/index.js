import classNames from 'classnames/bind';

import MenuSidebar, { MenuItemSidebar } from './Menu';
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
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sideber() {
    return (
        <aside className={cx('wrapper')}>
            <MenuSidebar>
                <MenuItemSidebar title="For you" to="/foryou" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItemSidebar
                    title="Following"
                    to="/folowing"
                    icon={<UserGroupIcon activeIcon={<UserGroupActiveIcon />} />}
                />
                <MenuItemSidebar
                    title="Explore"
                    to="/explore"
                    icon={<CompassIcon />}
                    activeIcon={<CompassActveIcon />}
                />
                <MenuItemSidebar title="LIVE" to="/live" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <MenuItemSidebar title="Profile" to="/@username" icon={<UserIcon />} activeIcon={<UserActiveIcon />} />
            </MenuSidebar>
        </aside>
    );
}

export default Sideber;
