import { useState, forwardRef } from 'react';
import classNames from 'classnames';

import images from '~/assets/images';
import styles from './image.module.scss';

function Image({ src, fallback: customFallback = images.noImage, alt, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
