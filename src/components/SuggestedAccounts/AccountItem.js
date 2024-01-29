import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import Image from '~/components/Image';
import images from '~/assets/images';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive placement="bottom" delay={[1000, 0]} offset={[-18, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image
                        className={cx('user-avatar')}
                        src=""
                        alt="username"
                        fallback={images.noAvatar}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('username')}>
                            <strong>ngamsaobanngay</strong>
                            <FontAwesomeIcon className={cx('circleCheck')} icon={faCircleCheck} />
                        </p>
                        <p className={cx('name')}>Ngam sao ban ngay</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
