import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;

}

export const Avatar = memo((props: AvatarProps) => {
    const {
        size,
        className,
        src,
        alt = '',
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.Avatar, [className])}
            alt={alt}
        />
    );
});
