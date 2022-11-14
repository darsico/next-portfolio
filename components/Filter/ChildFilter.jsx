import { useLanguageStore } from '../../store/store';
import DesignTags from './DesignTags';
import WebDevTags from './WebDevTags';

const ChildFilter = ({ toggle }) => {
  const { dictionary } = useLanguageStore(state => state)

  return (
    <div className="flex gap-2 mt-3  flex-wrap">
      {toggle === 1 && <p>{dictionary.filterText}</p>}
      {toggle === 2 && <WebDevTags />}
      {toggle === 3 && <DesignTags />}
    </div>
  );
};

export default ChildFilter;
