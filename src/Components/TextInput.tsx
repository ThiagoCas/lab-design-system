import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';



export interface TextInputRootProps {
    children: ReactNode;
}
function TextInputRoot({ children}: TextInputRootProps) {
    return (
        <div
        className={clsx(
            'flex items-center gap-3  h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within: ring-2 ring-cyan-300 ',
        )}
        >
            {children}
        </div>
    )
}

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon({ children}: TextInputIconProps) {
    return ( 
        <Slot className="w-6 h-6 text-gray-400">
            {children}
        </Slot>
    )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { 
}

function TextInputInput(props: TextInputInputProps) {
    return ( 
            <input
            className='bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400'
            {...props}
            />
    )
}

TextInputRoot.displayName = "TextInput.Root";
TextInputIcon.displayName = "TextInput.Icon";
TextInputInput.displayName = "TextInput.Input";
export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}