import { ReactNode, SVGProps } from "react";
import { useRouter } from "next/router";
import getNavigation, { INavigation } from "@/helpers/admin-navigation";

export interface IPageHeading {
  navigation?: INavigation
  title?: string
  actions?: ReactNode
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
  useRoute?: boolean
}

export default function PageHeading({ navigation, title, actions, icon: Icon, useRoute }: IPageHeading) {
  const router = useRouter()
  if (useRoute) {
    navigation = getNavigation('href', router.asPath)
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="flex text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          { Icon && <Icon className="mr-4 flex-shrink-0 h-10 w-10" /> || navigation?.icon && <navigation.icon className="mr-4 flex-shrink-0 h-10 w-10" /> }
          { title || navigation?.name }
        </h2>
      </div>
      { actions && <div className="mt-4 flex md:mt-0 md:ml-4 gap-2">{ actions }</div>}
    </div>
  )
}
