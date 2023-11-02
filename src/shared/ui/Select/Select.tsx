import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string
    label?: string
    options: SelectOption[]
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionList = useMemo(() => options?.map(({ content, value }) => (
        <option
            className={cls.option}
            value={value}
            key={value}
        >
            {content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, [className])}>
            {label && <span className={cls.label}>{label}</span>}

            <select
                className={cls.select}
                onChange={onChangeHandler}
                value={value}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
});
