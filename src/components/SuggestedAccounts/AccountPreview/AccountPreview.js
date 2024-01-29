import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';
import images from '~/assets/images';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('user-avatar')}
                    src=""
                    alt="username"
                    fallback={images.noAvatar}
                />
                <Button primary medium className={cx('follow-btn')}>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('username')}>
                    <strong>ngamsaobanngay</strong>
                    <FontAwesomeIcon className={cx('circleCheck')} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>Ngam sao ban ngay</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>15.04M</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>31.8M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
