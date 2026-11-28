function Badge({
    variant="default",
    size="md",
    className="",
    children,
    ...props
}){
    const baseStyle="inline-flex items-center gap-1.5 rounded-[var(--radius-full)] border";
    const variants={
        default:"bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)]",
        primary:"bg-[var(--color-primary)] text-[var(--color-surface)] border-transparent",
        success:"bg-[var(--color-success)] text-white border-transparent",
        warning:"bg-[var(--color-warning)] text-amber-950 border-transparent",
        danger:"bg-[var(--color-danger)] text-white border-transparent",
        info:"bg-[var(--color-info)] text-white border-transparent",
    }
    const finalVariant=variants[variant] ? variants[variant] : variants.default;
    const sizes={
        sm:"px-3 py-0.5 text-xs font-medium",
        md:"px-4 py-1 text-sm font-semibold",
    }
    const finalSize=sizes[size] ? sizes[size] : sizes.md;
    const combinedClass=`${baseStyle} ${finalVariant} ${finalSize} ${className}`;
    return(
        <span {...props} className={combinedClass}>{children}</span>
    )
}
export default Badge;