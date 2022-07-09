import DesignTags from './DesignTags';
import WebDevTags from './WebDevTags';

const ChildFilter = ({ toggle }) => {
  return (
    <div className="flex gap-2 mt-3  flex-wrap">
      {toggle === 1 && <p>Descubre todos los projectos que he desarrollado.</p>}
      {toggle === 2 && <WebDevTags />}
      {toggle === 3 && <DesignTags />}
    </div>
  );
};

export default ChildFilter;
