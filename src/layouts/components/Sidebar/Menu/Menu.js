import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuSidebar({ children }) {
    return <nav className={cx('menu-sidebar')}>{children}</nav>;
}

MenuSidebar.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MenuSidebar;
