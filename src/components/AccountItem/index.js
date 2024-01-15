import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                alt=""
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c1eee8a692b34023a2606a2ede714464~c5_300x300.webp?lk3s=a5d48078&amp;x-expires=1705442400&amp;x-signature=HVe0hjAI1U4UDsjsoDASqeayKIc%3D"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Ngam Sao Ban Ngay</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>@ngamsaobanngay</span>
            </div>
        </div>
    );
}

export default AccountItem;
