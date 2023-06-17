import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string
}

export const Loader:FC<LoaderProps> = ({ className }) => (
    <div className={classNames('', [className])}>
        <div className="lds-ripple">
            <div />
            <div />
        </div>
    </div>
);
