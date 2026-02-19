import React, { ButtonHTMLAttributes } from 'react';
import { BUTTON_SIZE, BUTTON_STYLES} from '@/styles/theme';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof BUTTON_STYLES
  size?: 'sm' | 'md' | 'lg'
  as?: "div" | "button"
  children: React.ReactNode
  className?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  as: Component = "button",
  children,
  className,
  ...props
}: IButtonProps ) {
  const classes = `${BUTTON_STYLES[variant]} ${BUTTON_SIZE[size]} ${className}`;

  if (Component === "div") {
    return (
      <Component className={classes}>
        {children}
      </Component>
    ) 
  }

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
};