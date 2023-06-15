declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }

    const className: IClassNames;
    export = className;
}
