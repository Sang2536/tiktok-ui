import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    small = false,
    medium = false,
    large = false,
    leftIcon,
    rightIcon,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    //  Remove event listener when button is disabled
    if (disabled) {
        Object.keys[props].forEach((key) => {
            if (key.startWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        medium,
        large,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('btn-icon')}>{leftIcon}</span>}
            <span className={cx('btn-title')}>{children}</span>
            {rightIcon && <span className={cx('btn-icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
