Está é um projeto base em [Next.js](https://nextjs.org/) com TailwindCSS e diversos componentes prontos, como Modal, Notificação e SideOver.

## Recursos disponíveis

- **[Zustand State Management](https://github.com/pmndrs/zustand)** - Gerenciamento de Estado pequeno, rápido, escalável e fácil. Baseado em Hooks e usando princípios simplificados do Flux.
- **[Typescript](https://www.typescriptlang.org/)** - O JavaScript com sintaxe para tipos
- **[Tailwind CSS](https://tailwindcss.com/)** - Um Utility First CSS Framewok que usa classes CSS para construir qualquer design, diretamente na sua marcação HTML.
- **[SWR](https://swr.vercel.app/)** - React Hook for Data Fetching - "stale-while-revalidate" on ClientSide
- **[On-demand Revalidation ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation-beta)** - acessando `/api/cache-clear?path=/rota` você pode limpar o cache de rotas ISR.
- **Form Components** - Temos components de formulário prontos como `<Input />`, `<InputControl />` (Com labels, help text e validation styles), `<SelectControl />` e `<Button/>`
- **UtilityWrapper** - Ele adiciona os recursos de **Modal**, **SideOver** e **Notification** na página.
- **Modal Component** - Você pode criar Modais facilmente (veja a implementação abaixo). Você pode também alterar o componente da Modal em `@/components/overlay/Modal`.
- **SideOver Component** - Para criar SideOvers (veja a implementação abaixo). Você pode também alterar o componente da SideOver em `@/components/overlay/Sideover`.
- **Notification Component** - Para criar balões de Notificação (veja a implementação abaixo). Você pode também alterar o componente de Notificações em `@/components/overlay/Notification`.
- **Hook WindowSize** - Este Hook monitora as alterações de tamanho da tela e pode ser útil em diversos casos de uso.
- **Página  404** - Uma página bonita de 404 (que pode ser customizada facilmente).
- **Admin Template** - Um template de Painel administrativo com Menu ativável rota, e uma propósta de design bonito e customizável.
- **[Gitpod](https://www.gitpod.io/)** - Visual Studio Code na núvem com online Storage e integração com Github

## Modal

```tsx
import { useModal } from '@/store/Modal'
import ModalBody from '@/components/ModalBody'
import Button from '@/components/form/Button'

export default function MyComponent() {
  const { create: createModal } = useModal(store => store.actions)
  return (
    <Button onClick={createModal(<ModalBody />)} label="Abrir Modal" />
  )
}
```

## SideOver

```tsx
import { useSideover } from '@/store/Sideover'
import SideoverBody from '@/components/SideoverBody'
import Button from '@/components/form/Button'

export default function MyComponent() {
  const { create: createSideover } = useSideover(store => store.actions)
  return (
    <Button onClick={createSideover('Título da Sideover', <SideoverBody />, 'lg')} label="Abrir Sideover" />
  )
}
```

## Notification

```tsx
import { useNotification } from '@/store/Notification'
import NotificationBody from '@/components/NotificationBody'
import Button from '@/components/form/Button'

export default function MyComponent() {
  const { create: createNotification } = useNotification(store => store.actions)
  return (
    <Button onClick={createNotification(<NotificationBody />)} label="Abrir Notificação" />
  )
}
```

## Rodando em dev

Primeiro, rode o servidor de deselvolvimento:

```bash
yarn dev
# or
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu browser para ver o resultado.
