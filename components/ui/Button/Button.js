import IconComponent from "@/components/IconComponent";
import './Button.scss';

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  icon, 
  iconPosition = 'right',
  type = 'button',
  target = '_blank',
  rel = 'noopener noreferrer'
}) {
  const buttonClass = `btn btn-${variant}`;
  const iconElement = icon ? <IconComponent icon={icon} /> : null;
  
  const content = iconPosition === 'left' 
    ? <>{iconElement}{children}</>
    : <>{children}{iconElement}</>;

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClass}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
