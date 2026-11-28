function Card({
    title,
    description,
    action,
    padding = "md",
    className = "",
    children,
    ...props
}) {
    const paddings = {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    const finalPadding = paddings[padding] ? paddings[padding] : paddings.md;

    return (
        <div
            {...props}
            className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] shadow-sm ${finalPadding} ${className}`}
        >
            {(title || description || action) && (
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                        {title && (
                            <h3 className="text-base font-semibold text-[var(--color-text)]">
                                {title}
                            </h3>
                        )}
                        {description && (
                            <p className="text-sm text-[var(--color-muted-text)] mt-1">
                                {description}
                            </p>
                        )}
                    </div>
                    {action && <div>{action}</div>}
                </div>
            )}

            {children}
        </div>
    );
}

export default Card;