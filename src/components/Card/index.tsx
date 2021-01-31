import styles from './Card.module.css'

export default function Card() {
  return (
    <div className={ styles.cardOne }>
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src="/vercel.svg" alt="Vercel Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-gray-500">You have a new message!</p>
      </div>
    </div>
  )
}
