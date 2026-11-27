import { Loader2 } from "lucide-react";
function Button({
    variant= "primary",
    size= "md",
    isLoading,
    disabled=false,
    className="",
    children,
    type= "button"
}){
    const baseStyle="inline-flex gap-2 items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 ring-offset-2 rounded-[var(--radius-md)] cursor-pointer border border-[var(--color-border)] transition-colors";
    const variants = {
        primary: "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-surface)] border-transparent",
        secondary: "bg-[var(--color-surface)] text-[var(--color-text)] hover:opacity-90",
        outline: "bg-transparent border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-bg)]",
        ghost: "bg-transparent border-transparent text-[var(--color-text)] hover:bg-[var(--color-bg)]",
        danger: "bg-[var(--color-danger)] text-[var(--color-surface)] border-transparent hover:opacity-90"
    };
    const finalVariant=variants[variant] ? variants[variant] : variants.primary;
    const sizes={
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-md",
        lg: "px-6 py-3 text-lg"
    }
    const finalSize=sizes[size] ? sizes[size] : sizes.md;
    const combinedClass=`${baseStyle} ${finalVariant} ${finalSize} ${className}`;
    return(
        <button type={type} disabled={disabled || isLoading} className={combinedClass} aria-busy={isLoading ? "true" : "false"}>
            {isLoading? (
                <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Loading...</span>
                </>
            ):(
                children
            )
            }
        </button>
    )
}
export default Button;