import classNames from 'classnames/bind';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { twitterIcon } from '~/assets/icons';
import styles from './Share.module.scss';
import Button, { ButtonClose } from '~/components/Button';

const cx = classNames.bind(styles);

function Share({ onClose }) {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(e.target.value);
        setIsCopied(true);
    };

    return (
        <div className={cx('share-modal')}>
            <ButtonClose
                className={cx('pos')}
                onClick={() => {
                    onClose();
                    setIsCopied(false);
                }}
            />
            <div className={cx('inner')}>
                <h1 className={cx('title')}>Share</h1>
                <p className={cx('desc')}>
                    Copy the link to share your combination of music, scenery and sounds with your friends!
                </p>
                <input
                    onClick={copyToClipboard}
                    className={isCopied ? cx('copied') : ''}
                    readOnly
                    value="https://lofi.io.vn/"
                    contentEditable={false}
                />
                {isCopied && <p className={cx('text-copied')}>Copied!</p>}
                <Button type={'rounded'} leftIcon={twitterIcon}>
                    Share
                </Button>
            </div>
        </div>
    );
}

Share.propsType = {
    onClose: PropTypes.func.isRequired,
};

export default Share;
