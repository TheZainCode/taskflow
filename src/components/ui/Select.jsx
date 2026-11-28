import { useId } from "react";
function Select({
    label="",
    id,
    options=[],
    placeholder="",
    value,
    onChange,
    disabled=false,
    errorMessage,
    className="",
    ...props
}){
    const generatedId=useId();
    const finalId=id || generatedId;
    return(
        <div className="flex flex-col gap-1.5">
            {label && (
                <label htmlFor={finalId} className="text-sm font-semibold text-[var(--color-text)]">{label}</label>
            )}
            <select
            {...props}
            id={finalId}
            value={value !== undefined ? value : undefined}
            onChange={onChange}
            disabled={disabled}
            aria-invalid={errorMessage ? "true" : "false"}
            aria-describedby={errorMessage ? `${finalId}-error`:undefined}
            className={`px-4 py-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}>
                {placeholder && (
                    <option value="" disabled>{placeholder}</option>
                )}
                {options.map((option)=>(
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errorMessage && (
                <p id={`${finalId}-error`} className="text-xs font-semibold text-[var(--color-danger)]">{errorMessage}</p>
            )}
        </div>
        )
}
export default Select;