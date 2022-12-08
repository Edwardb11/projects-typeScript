import { TabItem } from "./types/types"

interface TabsViewProps{
    items:TabItem[]
    onChange:(item:TabItem)=>void
}
export const TabsView = ({items,onChange}:TabsViewProps) => {
  return (
    <div>Hola Mundo</div>
  )
}
