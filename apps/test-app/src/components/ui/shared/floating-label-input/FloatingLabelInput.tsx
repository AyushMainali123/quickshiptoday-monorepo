import { cn } from "@/lib/utils";
import { Input } from "../../core/input";
import { Label } from "../../core/label";

interface IFloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export default function FloatingLabelInput({
  label,
  containerClassName,
  inputClassName,
  labelClassName,
  ...rest
}: IFloatingLabelInputProps) {
  return (
    <div
      className={cn(
        "relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600",
        containerClassName
      )}
    >
      <Label
        htmlFor={label}
        className={cn(
          "absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900",
          labelClassName
        )}
      >
        {label}
      </Label>
      <Input
        type="text"
        {...rest}
        name={label}
        id={label}
        className={cn(
          "border-none py-0 focus:border-transparent focus:outline-transparent focus:ring-0 focus:ring-offset-0 focus-visible:border-transparent focus-visible:outline-transparent focus-visible:ring-0 focus-visible:ring-offset-0",
          inputClassName
        )}
      />
    </div>
  );
}
