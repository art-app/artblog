import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticlesPage, [className])}>
            ARTICLES PAGE
        </div>
    );
};

export default memo(ArticlesPage);
