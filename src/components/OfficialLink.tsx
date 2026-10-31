import React from 'react';
import { OFFICIAL_URL } from '@/config/site';

export interface OfficialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  className?: string;
}

/**
 * OfficialLink 官方直达组件
 * 用于前往隐形人官方用户中心、在线订阅收银台与控制台管理后台
 */
export const OfficialLink: React.FC<OfficialLinkProps> = ({
  children,
  className = '',
  href = OFFICIAL_URL,
  ...props
}) => {
  const targetHref = href || OFFICIAL_URL;

  return (
    <a
      href={targetHref}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default OfficialLink;
