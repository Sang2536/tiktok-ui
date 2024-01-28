import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, classes }) {
    return <div className={cx('wrapper', classes)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.string,
};

export default Wrapper;
