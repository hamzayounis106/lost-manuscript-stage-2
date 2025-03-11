function ClickAnimeBtn({ children, tabIndex, className, TagName = "div" }) {
  return (
    <TagName tabIndex={tabIndex || 1} className={`clic""k ${className}`}>
      <span>{children}</span>
    </TagName>
  );
}

export default ClickAnimeBtn;
