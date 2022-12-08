import { useState } from "react";
import { TabItem } from "./types/types";

interface TabsViewProps {
  items: TabItem[];
  onChange: (item: TabItem) => void;
}
export default function TabsView({ items }: TabsViewProps) {
  const [selected, setSelected] = useState<number | null>(
    items.length >= 0 ? 0 : null
  );

  function handleClick(index: number) {
    setSelected(index);
  }

  if (selected === null) {
    return null;
  }

  return (
    <div>
      <div >
        {items.map((item, index) => (
          <TabView
            index={index}
            active={index === selected}
            item={item}
            onClick={handleClick}
          />
        ))}
      </div>
      <div>
        <div >
          {items.map((item, index) => (
            <>
              {selected === index && (
                <div>
                  <item.content />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
interface TabViewProps {
  index: number;
  active: boolean;
  item: TabItem;
  onClick: (index: number) => void;
}
function TabView({ index, active, item, onClick }: TabViewProps) {
  return active ? (
    <div>{item.title} </div>
  ) : (
    <button onClick={() => onClick(index)}>{item.title}</button>
  );
}
