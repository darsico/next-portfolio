export const getIconsSource = (iconsInput) => {
  if (!iconsInput) return;
  const formatIcons = iconsInput.slice(3, -5);
  const iconsArray = formatIcons.split(",");
  const iconSources = iconsArray.map((source) => {
    const srcWithQuotes = source.match(/src\=([^\s]*)\s/)[1];
    const cleanedSource = srcWithQuotes.substring(1, srcWithQuotes.length - 1);
    return cleanedSource;
  });
  return iconSources;
};
