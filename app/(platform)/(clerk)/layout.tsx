interface IProps {
  children: React.ReactNode;
}

function PlatformLayout({ children }: IProps) {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
}

export default PlatformLayout;
