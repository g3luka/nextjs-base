import { ReactNode } from 'react'
import Modal from '@/components/overlay/Modal'
import Sideover from '@/components/overlay/Sideover'
import Notification from '@/components/overlay/Notification'
import { useStore as useModal } from '@/store/Modal'
import { useStore as useSideover } from '@/store/Sideover'
import { useStore as useNotification } from '@/store/Notification'

interface ChildrenOnly {
  children: ReactNode
}

export default function UtilityWrapper({ children }: ChildrenOnly) {
  const { open: openModal } = useModal(store => store.state)
  const { open: openSideover } = useSideover(store => store.state)
  const { show: openNotification } = useNotification(store => store.state)

  return (
    <>
      { openModal && <Modal /> }
      { openSideover && <Sideover /> }
      { openNotification && <Notification /> }
      { children }
    </>
  )
}
