import { useId } from "react"
function Input({
    id,
    type="text",
    label="",
    value,
    onChange,
    placeholder,
    errorMessage,
    disabled=false,
    className="",
    ...props
}){
    const generatedId=useId();
    const finalId=id || generatedId;
    return(
        <div className="flex flex-col gap-1.5 w-full">
            {label && (<label htmlFor={finalId} className="text-sm font-semibold text-[var(--color-text)]">{label}</label>
            )}
            <input 
            {...props} 
            id={finalId} 
            type={type} 
            placeholder={placeholder} 
            disabled={disabled} 
            value={value!==undefined ? value : undefined} onChange={onChange} 
            className={`px-4 py-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} 
            aria-invalid= {errorMessage ? "true" : "false"} aria-describedby={errorMessage ? `${finalId}-error` : undefined} />
            {errorMessage && (
                <p  id={`${finalId}-error`} className="text-xs text-[var(--color-danger)] font-semibold">{errorMessage}</p>
            )}
        </div>
    )
}
export default Input;