import React, { CSSProperties, FC, ReactNode } from 'react';
import './Button.css'; 

type ButtonProps = {
  children?: ReactNode | string;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  title?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  htmlType?: 'button' | 'reset' | 'submit';
  isLoading?: boolean;
};

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
  type = 'primary',
  className,
  style,
  title,
  icon,
  iconPosition = 'left',
  htmlType,
  isLoading
}) => {
  const btnTypeStyle = disabled ? 'disabled-btn' : type === 'primary' ? 'primary-btn' : 'secondary-btn';
  const iconPositionStyle = iconPosition === 'left' ? 'left-align-icon' : 'right-align-icon';
  const loadingStyle = isLoading ? 'loading-button' : '';

  return (
    <div className="button-container">
      <button
        onClick={!disabled ? onClick : undefined}
        className={[
          'common-btn-style',
          btnTypeStyle,
          iconPositionStyle,
          loadingStyle,
          className
        ].join(' ')}
        style={style}
        title={title}
        type={htmlType}
        disabled={isLoading}
      >
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            {icon}
            {children}
          </>
        )}
      </button>
    </div>
  );
};

export default Button;
