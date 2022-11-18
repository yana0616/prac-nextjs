import Link from 'next/link'

export default function Logo() {
  return (
    // TODO:
    //   Linkコンポーネント使えば、aタグで括らなくていいっぽい（本だとaタグ括れって書いてる）
    <Link href='/' className='test'>
      CUBE
    </Link>
  )
}