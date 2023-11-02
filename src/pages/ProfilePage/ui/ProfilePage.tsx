import React, { memo } from 'react';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { classNames } from 'shared/lib/classNames';
import cls from './ProfilePage.module.scss';

const ProfilePage = memo(() => (
    <div className={classNames(cls.ProfilePage, [])}>
        <EditableProfileCard />
    </div>

));

export default ProfilePage;
