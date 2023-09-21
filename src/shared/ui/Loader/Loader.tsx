import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string
}

export const Loader = memo(({ className }: LoaderProps) => (
    <div className={classNames('', [className])}>
        <div className="lds-ripple">
            <div />
            <div />
        </div>
    </div>
));
