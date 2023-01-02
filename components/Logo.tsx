const Logo = (props: any) => {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <span className="ml-3 font-bold">Kai Takami</span>
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
