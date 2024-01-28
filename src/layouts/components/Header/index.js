import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Menu from '~/components/Popper/Menu';
import Search from '~/layouts/components/Search';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { CloudUploadIcon, MessageIcon, TelegramPlaneIcon } from '~/components/Icons';
import configs from '~/configs';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
                { type: 'language', code: 'jp', title: '日本語' },
                { type: 'language', code: 'fr', title: 'Française' },
                { type: 'language', code: 'ch', title: '中国人' },
                { type: 'language', code: 'kr', title: '한국인' },
                { type: 'language', code: 'ru', title: 'Русский' },
                { type: 'language', code: 'th', title: 'แบบไทย' },
                { type: 'language', code: 'es', title: 'Español' },
                { type: 'language', code: 'tr', title: 'Türkçe' },
                { type: 'language', code: 'se', title: 'Svenska' },
                { type: 'language', code: 'sa', title: 'عربي' },
                { type: 'language', code: 'rs', title: 'srbština' },
                { type: 'language', code: 'pl', title: 'Polski' },
                { type: 'language', code: 'pt', title: 'Português' },
                { type: 'language', code: 'de', title: 'Deutsch' },
                { type: 'language', code: 'nl', title: 'Nederlands' },
                { type: 'language', code: 'dk', title: 'Dansk' },
                { type: 'language', code: 'it', title: 'Italiana' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback-and-help',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@username',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: 'settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Sign out',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
                throw new Error();
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={configs.routes.home} className={cx('logo-link')}>
                    <Image src={images.logo} alt="TikTok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <CloudUploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <TelegramPlaneIcon width="2.4rem" height="2.4rem" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Mailbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary medium>
                                Sign in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c1eee8a692b34023a2606a2ede714464~c5_300x300.webp?lk3s=a5d48078&x-expires=1705442400&x-signature=HVe0hjAI1U4UDsjsoDASqeayKIc%3D"
                                alt="username"
                                fallback="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-89.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
